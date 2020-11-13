let template = document.createElement("template");
template.innerHTML = `
        <style>
        .k-dialog {
            width: 30%;
            z-index: 2001;
            display: block;
            position: absolute;
            background: #fff;
            border-radius: 2px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
            margin: 0 auto;
            top: 15vh;
            left:30%;
        }

        .k-wrapper {
            position: fixed;
            left: 0px;
            top: 0px;
            bottom: 0px;
            right: 0px;
            background: black;
            opacity: 0.4;
            z-index: 2000;
        }

        .k-header {
            padding: 20px 20px 10px;
        }

        .k-header .k-title {
            line-height: 24px;
            font-size: 18px;
            color: #303133;
            float: left;
        }

        .k-body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
        }

        .k-footer {
            padding: 10px 20px 30px;
            text-align: right;
        }

        .k-close {
            color: #909399;
            font-weight: 400;
            float: right;
            cursor: pointer;
        }

        .k-cancel {
            color: #606266;
            border: 1px solid #dcdfe6;
            text-align: center;
            cursor: pointer;
            padding: 12px 20px;
            font-size: 14px;
            border-radius: 4px;
            font-weight: 500;
            margin-right: 10px;
        }

        .k-cancel:hover {
            color: #409eff;
            background: #ecf5ff;
            border-color: #c6e2ff;
        }

        .k-primary {
            border: 1px solid #dcdfe6;
            text-align: center;
            cursor: pointer;
            padding: 12px 20px;
            font-size: 14px;
            border-radius: 4px;
            font-weight: 500;
            background: #409eff;
            color: #fff;
            margin-left: 10px;
        }

        .k-primary:hover {
            background: #66b1ff;
        }
        .k-input{
            width: 100%;
            margin-left: 20px;
            margin-bottom: 20px;
        }
        .input-inner {
            -webkit-appearance: none;
            background-color: #fff;
            background-image: none;
            border-radius: 4px;
            border: 1px solid #dcdfe6;
            box-sizing: border-box;
            color: #606266;
            display: inline-block;
            font-size: inherit;
            height: 40px;
            line-height: 40px;
            outline: none;
            padding: 0 15px;
            transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
            width: 100%;
            margin-top: 20px;
        }
        
        </style>
        <div class="k-wrapper"></div>
    <div class="k-dialog">
        <div class="k-header">
            <span class="k-title">提示</span><span class="k-close">X</span>
        </div>
        <div class="k-body">
            <span>这是一段文本</span>
            <input class="input-inner" type="text" />
        </div>
        <div class="k-footer">
            <span class="k-cancel">取消</span>
            <span class="k-primary">确定</span>
        </div>
    </div>
`;

// 创建自定义组件
class MessageBoxele extends HTMLElement {
  constructor() {
    super();
    console.log(this);
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content);
    // let that = this;
    this._shadowRoot.querySelector(".k-dialog").onclick = (e) => {
      switch (e.target.className) {
        case "k-close":
          console.log(this);
          this.dispatchEvent(new CustomEvent("close"));
          break;
        case "k-cancel":
          this.dispatchEvent(new CustomEvent("cancel"));
          break;
        case "k-primary":
          let val = this._shadowRoot.querySelector(".input-inner").value;
          console.log(val);
          this.dispatchEvent(
            new CustomEvent("primary", {
              detail: val,
            })
          );
          break;
      }
    };
  }
  set width(newValue) {
    this._shadowRoot.querySelector(".k-dialog").style.width = newValue;
  }
  set isCancel(newValue) {}
  set height(newValue) {
    this._shadowRoot.querySelector(".k-dialog").style.height = newValue;
  }

  set title(newValue) {
    this._shadowRoot.querySelector(".k-title").innerHTML = newValue;
  }
  set content(newValue) {
    this._shadowRoot.querySelector(".k-body span").innerHTML = newValue;
  }
  set dragable(newValue) {
    if (newValue) {
      this.canDragable();
    }
  }
  set maskable(newValue) {
    if (!newValue) {
      this._shadowRoot.querySelector(".k-wrapper").style.display = "none";
    }
  }
  // 是否可以拖拽；
  canDragable() {
    let dailog = this._shadowRoot.querySelector(".k-dialog");
    dailog.onmousedown = function (e) {
      let x = e.clientX - dailog.offsetLeft;
      let y = e.clientY - dailog.offsetTop;
      dailog.onmousemove = function (e) {
        let xx = e.clientX;
        let yy = e.clientY;
        dailog.style.left = xx - x + "px";
        dailog.style.top = yy - y + "px";
      };
    };
    document.onmouseup = function () {
      dailog.onmousemove = "";
    };
  }
}
customElements.define("message-boxele", MessageBoxele);

export default class MessageBox {
  constructor(opts) {
    // console.log(opts);
    // 默认配置；
    let defalutOpts = {
      width: "30%",
      height: "250px",
      title: "测试标题",
      content: "测试内容",
      dragable: true, //是否可拖拽
      maskable: true, //是否有遮罩
      isCancel: false, //是否有取消
      success: function () {},
    };
    // 合并配置；
    // 作业 ： 用至少一种上课讲之外的方法 实现 配置的合并，达到课上一样的效果；合并传入配置对象和默认配置对象 （opts,defalutOpts）;
    
    // 方法一：该方法不会影响到defaultOpts和opts对象的值
    this.opts = {...defalutOpts, ...opts};  

    // 方法二：将opts对象的属性复制到defalutOpts上
    for(let key in opts){
        defalutOpts[key] = opts[key];
    }
    this.opts = defalutOpts;

    // 课堂方法：
    this.opts = Object.assign(defalutOpts, opts);  // 合并两个对象后，defalutOpts对象会发生改变
    console.log(opts);
    console.log(this.opts);
    this.createDom();
  }
  createDom() {
    let MessageBoxEle = document.createElement("message-boxele");
    MessageBoxEle.style.display = "none";

    MessageBoxEle.width = this.opts.width;
    MessageBoxEle.height = this.opts.height;
    MessageBoxEle.title = this.opts.title;
    MessageBoxEle.content = this.opts.content;
    MessageBoxEle.dragable = this.opts.dragable;
    MessageBoxEle.maskable = this.opts.maskable;
    MessageBoxEle.isCancel = this.opts.isCancel;

    document.body.appendChild(MessageBoxEle);
    this.MessageBoxEle = MessageBoxEle;
    MessageBoxEle.addEventListener("close", function () {
      console.log("close");
      MessageBoxEle.style.display = "none";
    });
    MessageBoxEle.addEventListener("cancel", function () {
      console.log("cancel");
      MessageBoxEle.style.display = "none";
    });

    MessageBoxEle.addEventListener("primary", (e) => {
      console.log(e);
      // console.log("primary确定",this);
      this.opts.success(e.detail);
      MessageBoxEle.style.display = "none";
    });
  }
  open() {
    this.MessageBoxEle.style.display = "block";
  }
}

// EventTarget  --- MyEvent;
