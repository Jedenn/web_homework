class Jq {
  constructor(args, root) {
    // 上次操作节点；root
    if (typeof root === "undefined") {
      this["prevObj"] = [document];
    } else {
      this["prevObj"] = root;
    }
    // 获取元素
    // this.ele = document.querySelector(args);
    // this.elels = document.querySelectorAll(args);
    // this[0] = ele1 this[1] = ele2
    // let eles = document.querySelectorAll(args);
    // this.addEles(eles);
    // console.log(this);

    if (typeof args === "string") {
      // $(".box1")
      let eles = document.querySelectorAll(args);
      this.addEles(eles);
    } else if (typeof args === "function") {
      // $(function(){
      //     console.log("ready");
      // })
      document.addEventListener("DOMContentLoaded", args);
    } else {
      // $(document.querySelector(".box1")).
      if (typeof args.length === "undefined") {
        // 对象
        this[0] = args;
        this.length = 1;
      } else {
        // 数组；
        this.addEles(args);
      }
    }
  }
  addEles(eles) {
    for (let i = 0; i < eles.length; i++) {
      this[i] = eles[i];
    }
    this.length = eles.length;
  }
  click(cb) {
    // 绑定事件；
    // this.ele.addEventListener("click",cb);
    for (let i = 0; i < this.length; i++) {
      this[i].addEventListener("click", cb);
    }
  }
  on(eventName, cb) {
    // console.log("on..")
    // 多个元素  多个事件处理
    let eventNameArr = eventName.split(" ");
    for (let i = 0; i < this.length; i++) {
      for (let j = 0; j < eventNameArr.length; j++) {
        console.log(this[i]);
        this[i].addEventListener(eventNameArr[j], cb);
      }
    }
  }
  eq(index) {
    // console.log(new Jq(this[index]));
    // 原生js对象；返还jq对象；
    // return this[index];
    // return this; (box1,box2)
    return new Jq(this[index], this); // (一个元素 box2)
    // 1.返还this； 2. 返还新的实例化对象；
  }
  end() {
    return this["prevObj"];
  }
  css(...args) {
    if (args.length === 1) {
      if (typeof args[0] === "string") {
        // 获取样式
        return this.getStyle(this[0], args[0]);
      } else {
        // 对象  多个元素设置 多个样式
        for (let i = 0; i < this.length; i++) {
          for (let j in args[0]) {
            this.setStyle(this[i], j, args[0][j]);
          }
        }
      }
    } else {
      // css("background","yellow");
      // 设置样式；多个元素设置一个样式
      for (let i = 0; i < this.length; i++) {
        this.setStyle(this[i], args[0], args[1]);
      }
    }
  }
  getStyle(ele, styleName) {
    return window.getComputedStyle(ele, null)[styleName];
  }
  setStyle(ele, styleName, styleValue) {
    if (typeof styleValue === "number") {
      if (!$.cssNumber[styleName]) {
        styleValue = styleValue + "px";
      }
    }
    ele.style[styleName] = styleValue;
  }

  // 对外调用的接口
  animate(prop, speed, easing, callback) {
    //1. 借鉴jQuery实现原理，将参数转成配置写法, 不用担心少参数，也不用担心参数顺序
    let optall = {
      speed: speed || 3,
      easing: easing || "swing",
      callback: callback || function () {},
    };

    // 2. 具体实现动画的方法不作为接口暴露，因此使用对象外的Animation方法
    for (let i = 0; i < this.length; i++) {
      doAnimation(this.eq(i), Object.assign({}, prop), optall);
    }
  }
}

function doAnimation(originProp, prop, optall) {
  for (let styleName in prop) {
    let oldValue = parseInt(this.getStyle(this.eq(0), styleName));
    this.setStyle(this.eq(0), styleName, oldValue + 5);
    let newValue = parseInt(this.getStyle(this.eq(0), styleName));
    let stopValue = parseInt(prop[styleName]);
    if (newValue <= stopValue) {
      // 实现动画的方法使用h5提供的专门解决动画更新的API，由浏览器自动以最合适的频率刷新动画
      var c = requestAnimationFrame(
        doAnimation.bind(this, originProp, prop, optall)
      );
    } else {
      cancelAnimationFrame(c);
    }
  }
}

function $(args) {
  // return {
  //     click(cb){
  //         console.log("执行了click方法 ");
  //         document.querySelector(args).addEventListener("click",cb);
  //     }
  // }
  return new Jq(args);
}

$.cssNumber = {
  animationIterationCount: true,
  columnCount: true,
  fillOpacity: true,
  flexGrow: true,
  flexShrink: true,
  fontWeight: true,
  gridArea: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnStart: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowStart: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  widows: true,
  zIndex: true,
  zoom: true,
};

// export default $ ;
