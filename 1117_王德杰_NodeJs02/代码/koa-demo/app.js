const Koa = require('koa');
const KoaStaticCache = require('koa-static-cache');
const KoaRouter = require('koa-router');

const server = new Koa();

// 静态代理
server.use( KoaStaticCache('./public', {
    prefix: '/public',
    // gzip 压缩
    gzip: true,
    // 有利于开发中的文件变更
    dynamic: true
}) );


let router = new KoaRouter();
router.get('/quote', async ctx=>{
    const quotes = [
        '虽然我个子矮，但我发际线高啊！',
        '有些事情做不完，就留到明天做吧。运气好的话，明天死了就不用做了。',
        '善良没用，你得漂亮。',
        '好好活下去 每天都有新打击。',
        '活着的时候把自己搞得好看一点，这样你就不会死得太难看。',
        '世上无难事 只要肯放弃。',
        '加油，你是最胖的！'
    ];
    ctx.body = quotes[Date.now()%quotes.length];
})

server.use( router.routes() );

// 启动了一个基于 http 的 webserver
server.listen(8888);