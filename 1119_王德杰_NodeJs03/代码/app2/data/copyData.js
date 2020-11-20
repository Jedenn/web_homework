const items = require("./items.json");
const mysql2 = require("mysql2");
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'kkb'
})

console.log(items);


for(let idx in items){
    let {category_id, name, price, cover} = items[idx];
    console.log({category_id,name,price,cover});
    let sql = 'insert into `items`(`category_id`,`name`,`price`,`cover`) values(?,?,?,?)';
    let rs =   query(sql, [category_id,name,price,cover]);
    console.log(rs);
}




function query(sql, prePared) {
    connection.query(
        sql,
        prePared
    ) 
}