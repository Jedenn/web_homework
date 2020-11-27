let btnElement = document.querySelector('.btn');
let attachmentElement = document.querySelector('#attachment');
let taskBodyElement = document.querySelector('.task_body');




btnElement.onclick = function() {
    attachmentElement.click();
}

attachmentElement.onchange = function() {

    const xhr = new XMLHttpRequest();
    xhr.open('post', '/save', true);
    
    let fd = new FormData();

    // xhr 下面的事件对应的是请求过程中的相关事件，请求：下载
    // xhr.onprogress = function() {
        // 客户端发送这次请求后，从服务器获取数据的进度过程
    // }


    // 如果想监控上传的进度事件 upload
    // console.log(xhr.upload);

    let liElement = document.createElement('li');
    let spanElement = document.createElement('span');
    let taskProgressStatusElement = document.createElement('span');
    let progressElement = document.createElement('span');

    xhr.upload.onloadstart = function() {
        taskProgressStatusElement.classList.add('task-progress-status');
        taskProgressStatusElement.innerHTML = '开始上传……';
        progressElement.classList.add('progress');
        progressElement.style.width = '0%';
        liElement.appendChild(taskProgressStatusElement);
        liElement.appendChild(progressElement);
        taskBodyElement.appendChild(liElement);
        document.querySelector(".task_panel").style.display = "";
    }

    xhr.upload.onprogress = function(e) {
        // e.total : 上传的总大小 
        // e.loaded : 已经上传的数据大小
        let v = (e.loaded / e.total * 100).toFixed(2);
        taskProgressStatusElement.innerHTML = v + '%';
        progressElement.style.width = v + '%';
    }

    xhr.upload.onloadend = function(e){
        // 上传结束后,关闭上传窗口
        console.log("上传完毕");
        document.querySelector(".task_panel").style.display = "none";
    }

    xhr.onload = function() {
        //  <div class="content-list">
        // 	<!-- 在这里显示上传的图片 -->
        // </div>
        let contentList = document.querySelector(".content-list");
        let imgEle = document.createElement("img");
        imgEle.src = '../' + xhr.responseText;  // index.html与上传文件不在同一级目录下
        imgEle.height = 150;
        contentList.appendChild(imgEle);
    }

    fd.append('attachment', attachmentElement.files[0]);
    xhr.send(fd);

}

// 当进入页面的时候，首先会调用 /getPhotos 接口从后端拿去到所有已经上传的图片数据，并显示在 content-list 中

window.onload = function(){
    // 1. 获取上传的图片
    let xhr = new XMLHttpRequest();
    xhr.open("get", "/getPhotos",true);

    xhr.onload = function(){
        let photos = JSON.parse(xhr.responseText);
        for(let photo of photos){
            let imgSrc = "../static/upload/"+photo.filename;

            let contentList = document.querySelector(".content-list");
            let imgEle = document.createElement("img");
            imgEle.src = imgSrc; 
            imgEle.height = 150;
            contentList.appendChild(imgEle)
        }
    }

    xhr.send();
}