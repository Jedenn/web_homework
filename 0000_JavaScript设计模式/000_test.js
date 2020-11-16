const fs = require("fs");

fs.writeFile("1.txt", "我要写入的文字", {flag:"w"}, function(err){
    if(err){
        return console.log(err);
    }else{
        console.log("写入成功");
    }
})

fs.readFile("1.txt", "utf8", (err,data)=>{
    if(err){
        return console.log(err);
    }else{
        console.log(data);
    }
})