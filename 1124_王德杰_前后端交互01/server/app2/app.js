const Koa = require('koa');
const KoaRouter = require('koa-router');
const KoaStaticCache = require('koa-static-cache');
const KoaBody = require('koa-body');
const mysql2 = require('mysql2');
const parsePath = require('parse-filepath')

// 创建数据库链接
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'kkb'
});

function query(sql, prePared) {
    return new Promise((resolve, reject) => {
        connection.query(
            sql,
            prePared,
            function(err, results, fields) {
                if (err) {
                    reject(err); 
                } else {
                    resolve([results, fields]);
                }
            }
        ) 
    });
}


const app = new Koa();

app.use( KoaStaticCache('./public', {
    prefix: '/public',
    gzip: true,
    dynamic: true
}) );


// 静态资源文件代理static/upload路径下文件
app.use( KoaStaticCache('./static/upload', {
    prefix: '/static/upload',
    gzip: true,
    dynamic: true
}) );


const router = new KoaRouter();


router.post('/save', KoaBody({
    multipart: true,
    formidable: {
        uploadDir: './static/upload',  // 文件保存到static/upload目录下
        keepExtensions: true
    }
}), async ctx => {
    let attachment = ctx.request.files.attachment;
    let {base: filename} = parsePath(attachment.path);
    let {type, size} = attachment
    // 1. 保存文件信息到表photos中
    let [rs] = await query('insert into `photos`(`filename`,`type`,`size`) value(?,?,?)',[filename, type, size])
    // 2. 把上传成功后的当前这个图片的访问地址返回给 前端
    ctx.body = "../static/upload/" + filename;
});

router.get('/getPhotos', async ctx => {
    // 从数据库中读取所有上传的图片记录数据，并返回给前端，前端通过ajax调用该接口
    let [rs] = await query('select filename from `photos`');
    ctx.set("content-type", "application/json");
    ctx.body = JSON.stringify(rs);
})

app.use(router.routes());

app.listen(8888);