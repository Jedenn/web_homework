window.onload = function () {
  registerLoginEvent();
  registerSaveEvent(); // 注册上传图片事件

};

/**
 * 登录按钮事件：使用ajax发送登录请求
 */
function registerLoginEvent() {
  let loginBtnElement = document.querySelector("#loginBtn");
  let authorizationData = "";

  loginBtnElement.onclick = function () {
    let xhr = new XMLHttpRequest();
    xhr.open("post", "/login", true);

    xhr.onload = function () {
      // 如果登录成功，与后端约定好，在报文头Authorization中返回jwt token
      // 前端获取到token后，保存到localStorage，以便下一次请求时携带发送token到后端
      authorizationData = xhr.getResponseHeader("Authorization");
      if (authorizationData) {
          alert("登录成功");
        localStorage.setItem("authorizationData", authorizationData);
        // 发送ajax请求获取当前用户上传的照片
        getPhotoData();
      }
    };

    xhr.setRequestHeader("content-type", "application/json");
    xhr.send(
      JSON.stringify({
        username: document.querySelector("#username").value,
        password: document.querySelector("#password").value,
      })
    );
  };
}

/**
 * 注册上传保存按钮事件
 */
function registerSaveEvent() {
  let btnElement = document.querySelector(".btn");
  let attachmentElement = document.querySelector("#attachment");
  let taskBodyElement = document.querySelector(".task_body");

  btnElement.onclick = function () {
    attachmentElement.click();
  };

  attachmentElement.onchange = function () {
    const xhr = new XMLHttpRequest();
    xhr.open("post", "/save", true);

    let fd = new FormData();

    let liElement = document.createElement("li");
    let spanElement = document.createElement("span");
    let taskProgressStatusElement = document.createElement("span");
    let progressElement = document.createElement("span");

    xhr.upload.onloadstart = function () {
      taskProgressStatusElement.classList.add("task-progress-status");
      taskProgressStatusElement.innerHTML = "开始上传……";
      progressElement.classList.add("progress");
      progressElement.style.width = "0%";
      liElement.appendChild(taskProgressStatusElement);
      liElement.appendChild(progressElement);
      taskBodyElement.appendChild(liElement);
      document.querySelector(".task_panel").style.display = "";
    };

    xhr.upload.onprogress = function (e) {
      let v = ((e.loaded / e.total) * 100).toFixed(2);
      taskProgressStatusElement.innerHTML = v + "%";
      progressElement.style.width = v + "%";
    };

    xhr.upload.onloadend = function (e) {
      document.querySelector(".task_panel").style.display = "none";
    };

    xhr.onload = function () {
      let contentList = document.querySelector(".content-list");
      let image = new Image();
      image.src = "/static/upload/" + xhr.responseText;
      contentList.appendChild(image);
    };

    // 请求头中要发送token, token中携带的个人信息用于标记所上传照片的所有者
    let auth = localStorage.getItem("authorizationData");
    if (auth) {
      xhr.setRequestHeader("Authorization",   auth);
    }
    fd.append("attachment", attachmentElement.files[0]);
    xhr.send(fd);
  };
}

/**
 * 获取当前用户所上传的图片
 */
function getPhotoData() {
  let xhr = new XMLHttpRequest();
  xhr.open("get", "/getPhotos", true);

  xhr.onload = function () {
    let photos = JSON.parse(xhr.responseText);
    for (let photo of photos) {
      let contentList = document.querySelector(".content-list");
      let image = new Image();
      image.src = "/static/upload/" + photo.filename;
      contentList.appendChild(image);
    }
  };

  // 请求头中要发送token, token中携带的个人信息可用于查询用户上传的照片
  let auth = localStorage.getItem("authorizationData");
  if (auth) {
    xhr.setRequestHeader("Authorization",  auth);
  }
  xhr.send();
}
