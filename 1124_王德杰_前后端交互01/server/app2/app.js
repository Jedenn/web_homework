const Koa = require("koa");
const KoaRouter = require("koa-router");
const KoaStaticCache = require("koa-static-cache");
const KoaBody = require("koa-body");
const mysql2 = require("mysql2");
const parsePath = require("parse-filepath");
const jwt = require("koa-jwt");
const jsonwebtoken = require("jsonwebtoken");

// 创建数据库链接
const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "kkb",
});

function query(sql, prePared) {
  return new Promise((resolve, reject) => {
    connection.query(sql, prePared, function (err, results, fields) {
      if (err) {
        reject(err);
      } else {
        resolve([results, fields]);
      }
    });
  });
}

const app = new Koa();

const secret = "kkb";

// 1. public目录下静态资源访问不需要jwt验证
// 2. login接口不需要jwt验证
// 3. static目录下静态资源访问不需要jwt验证
app.use(jwt({ secret }).unless({ path: [/^\/public/, /^\/login/, /^\/static/] })); 

app.use(
  KoaStaticCache("./public", {
    prefix: "/public",
    gzip: true,
    dynamic: true,
  })
);

app.use(
  KoaStaticCache("./static", {
    prefix: "/static",
    gzip: true,
    dynamic: true,
  })
);

const router = new KoaRouter();

router.post("/login", KoaBody(), async (ctx) => {
  let { username, password } = ctx.request.body;
  // 检查用户名密码是否在用户数据库中存在
  let [rs] = await query(
    `select * from users where username='${username}' and password='${password}'`
  );
  if (rs.length == 1) {
    // 如果存在，则登录成功，将用户信息使用jwt加密后得到token，token被放置在响应报文头Authorization中
    let userInfo = {
      id: rs[0].id,
      username: rs[0].username,
    };
    ctx.set("Authorization", "Bearer " + jsonwebtoken.sign(userInfo, secret)); // 设置响应报文头，格式为[Bearer ***]
    ctx.body = "登录成功";
  } else {
    ctx.body = "登录失败";
  }
});

router.post(
  "/save",
  KoaBody({
    multipart: true,
    formidable: {
      uploadDir: "./static/upload", // 文件保存到static/upload目录下
      keepExtensions: true,
    },
  }),
  async (ctx) => {
    let authorizationData = ctx.get("Authorization");
    if (authorizationData) {
      let token = authorizationData.split(" ")[1]; // authorization格式为[Bearer ***],所以要split
      let userInfo = jsonwebtoken.verify(token, secret);  // 验证失败会抛出异常
      console.log(userInfo.id);
      console.log(userInfo);
      if (userInfo.id) {
          // 保存照片信息及其所有者用户Id
        let attachment = ctx.request.files.attachment;
        let { base: filename } = parsePath(attachment.path);
        let { type, size } = attachment;
        let [
          rs,
        ] = await query(
          "insert into `photos`(`filename`,`type`,`size`, `uid`) value(?,?,?,?)",
          [filename, type, size, userInfo.id]
        );
        ctx.body = filename;
      } else {
        ctx.body = "您尚未登录，无法上传文件";
      }
    }else{
        ctx.body = "您尚未登录，无法上传文件";
    }
  }
);

router.get("/getPhotos", async (ctx) => {
  // 判断用户是否有权限（是否登录）
  let authorizationData = ctx.get("Authorization");
  console.log(authorizationData);
  if (authorizationData) {
    let token = authorizationData.split(" ")[1]; // 报文头的格式是[Bearer ***]
    let userInfo = jsonwebtoken.verify(token, secret); // 验证不通过会抛出异常, jwt中间件会自动返回状态码401
    console.log(userInfo.id);
    console.log(userInfo);
    if (userInfo.id) {
      // 获取当前用户所上传的文件
      let [rs] = await query(
        `select filename from photos where uid='${userInfo.id}'`
      );
      ctx.set("content-type", "application/json");
      ctx.body = JSON.stringify(rs);
    } else {
      ctx.body = ""; // 无权访问则返回空
    }
  } else {
    ctx.body = ""; // 无权返回空
  }
});

app.use(router.routes());

app.listen(8888);
