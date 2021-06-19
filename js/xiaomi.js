import $ from "./library/jquery.js";
import "./jquery.lazyload.js";
// import "./layer/layer.js";
$.ajax({
  type: "post",
  url: "./php/getData.php",

  dataType: "json",
  success: function (res) {
    console.log(res);

    let temp = "";

    res.forEach((elm, i) => {
      let picture = JSON.parse(elm.picture);
      console.log(picture);

      temp += `
        <li class="list-2">
        <a href="./detailes.html?id=${elm.id}">
        <img src="${picture[0].src}" alt="">
        <h3>${elm.title}</h3>
        <p class="detail">${elm.details}</p>
        <p class="price-p">${elm.price}元起</p>
        </a>
        </li>`;
    });
    $(".list-ul").append(temp);
    $(".slider").slider({
      delay: 1000,
      speed: 200,
    });
    $("img").lazyload({ effect: "fadeIn" });
  },
});
$(function () {
  let rollElm = document.querySelector("#move");
  let btn1 = document.querySelector("#left");
  let btn2 = document.querySelector("#right");

  btn1.onclick = function (ev) {
    $("#move").css({ left: "0" });
    // console.log(1);
  };
  btn2.onclick = function (ev) {
    $("#move").css({ left: "-992px" });
  };
});

// 顶部导航栏二维码
$(document).ready(function () {
  $("#flip").hover(function () {
    $("#panel").slideToggle("slow");
  });
});
//   顶部导航栏悬浮下弹框
$(document).ready(function () {
  $(".nav-slider").hover(function () {
    $(".nav-slider-list").slideToggle("slow");
  });
});
$(document).ready(function () {
  $(".nav-slider-1").hover(function () {
    $(".nav-slider-list-1").slideToggle("slow");
  });
});
$(document).ready(function () {
  $(".nav-slider-2").hover(function () {
    $(".nav-slider-list-2").slideToggle("slow");
  });
});
$(document).ready(function () {
  $(".nav-slider-3").hover(function () {
    $(".nav-slider-list-3").slideToggle("slow");
  });
});
$(document).ready(function () {
  $(".nav-slider-4").hover(function () {
    $(".nav-slider-list-4").slideToggle("slow");
  });
});
$(document).ready(function () {
  $(".nav-slider-5").hover(function () {
    $(".nav-slider-list-5").slideToggle("slow");
  });
});
$(document).ready(function () {
  $(".nav-slider-6").hover(function () {
    $(".nav-slider-list-6").slideToggle("slow");
  });
});

$(document).ready(function () {
  $("window").on("onload", function () {
    let tab1 = document.getElementById("tab-1");
    let tab2 = document.getElementById("tab-2");
    let tbr = document.getElementById("tel-bot-r");
    $("tab1").onmouseover = function () {
      $("tbr").style.display = "none";
    };
  });
});
// 在页面中 显示一个 51假期的倒计时
// 距离2021年4月30日18:00:00 51假期还剩 xx天xx小时xx分xx秒

// 提示:
// 两个时间
// 当前时间(current) 未来时间(futuer)
// futuer - current
var now = new Date();
var two = new Date(2222, 4, 15, 14, 0, 0);
var ten = new Date(2222, 4, 15, 10, 0, 0);
var nowH = now.getHours();
var twoH = two.getHours();
var tenH = ten.getHours();
// console.log(tenH);
if (nowH >= tenH && nowH < twoH) {
  window.onload = function () {
    var futuer = new Date(2222, 4, 15, 14, 0, 0); // 未来时间
    var starttime = document.getElementById("start-time");
    var hour1 = document.getElementById("hour1");
    var min1 = document.getElementById("min1");
    var miao1 = document.getElementById("miao1");
    setInterval(function () {
      var current = new Date();
      var ms = futuer - current;
      var s = ms / 1000; // 获得秒
      var day = parseInt(s / 86400);
      var hour = parseInt((s % 86400) / 3600);
      var min = parseInt((s % 3600) / 60);
      var sec = parseInt(s % 60);
      // time.innerHTML = '距离2021年4月30日18:00:00 51假期还剩 ' + day + '天' + hour + '小时' + min + '分' + sec + '秒';
      hour1.innerHTML = hour;
      min1.innerHTML = min;
      miao1.innerHTML = sec;
      starttime.innerHTML = "14 : 00 场";
    }, 100);
  };
} else {
  window.onload = function () {
    var futuer = new Date(2222, 4, 15, 10, 0, 0); // 未来时间
    var starttime = document.getElementById("start-time");
    var hour1 = document.getElementById("hour1");
    var min1 = document.getElementById("min1");
    var miao1 = document.getElementById("miao1");
    setInterval(function () {
      var current = new Date();
      var ms = futuer - current;
      var s = ms / 1000; // 获得秒
      var day = parseInt(s / 86400);
      var hour = parseInt((s % 86400) / 3600);
      var min = parseInt((s % 3600) / 60);
      var sec = parseInt(s % 60);
      // time.innerHTML = '距离2021年4月30日18:00:00 51假期还剩 ' + day + '天' + hour + '小时' + min + '分' + sec + '秒';
      hour1.innerHTML = hour;
      min1.innerHTML = min;
      miao1.innerHTML = sec;
      starttime.innerHTML = "10 :00 场";
    }, 100);
  };
}

$(function () {
  $("#tab1").on("mouseover", function () {
    //  alert(1);
    $("#tab1").addClass("active").siblings().removeClass("active");

    $("#tab1-1").addClass("display").siblings().removeClass("display");
  });
  $("#tab2").on("mouseover", function () {
    // alert(2);
    $("#tab2").addClass("active").siblings().removeClass("active");
    $("#tab2-2").addClass("display").siblings().removeClass("display");
  });
  $("#tab3").on("mouseover", function () {
    // alert(2);
    $("#tab3").addClass("active").siblings().removeClass("active");
    $("#tab3-3").addClass("display").siblings().removeClass("display");
  });
  $("#tab4").on("mouseover", function () {
    // alert(2);
    $("#tab4").addClass("active").siblings().removeClass("active");
    $("#tab4-4").addClass("display").siblings().removeClass("display");
  });
  $("#tab5").on("mouseover", function () {
    // alert(2);
    $("#tab5").addClass("active").siblings().removeClass("active");
    $("#tab5-5").addClass("display").siblings().removeClass("display");
  });
});
var a = document.querySelector(".top-nav-l");
a.onclick = function () {
  console.log(1);
};

if (getCookie("username")) {
  $(".log")
    .html("用户" + getCookie("username") + "欢迎进入小米网站")
    .attr("href", "#");
  $(".reg").html("退出").attr("href", "#");
  var logout = document.querySelector(".reg");
  logout.onclick = function () {
    var con = confirm("是否退出");
    if (con) {
      delCookie("username");
      $(".log").html("登录").attr("href", "./login.html");
      $(".reg").html("注册").attr("href", "#");
    }
  };
}
