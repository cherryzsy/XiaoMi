import $ from "./library/jquery.js";
import "./cookie.js";
var rememberusername = getCookie("rememberusername");
var user = document.querySelector("[name='username']");
if (rememberusername) {
  user.value = rememberusername;
}
$("#logn").on("click", function () {
  let phone = $("#phone").val();
  let password = $("#password").val();
  console.log(phone);
  console.log(password);
  // var loadindex = layer.load(1, {
  //   shade: [0.5, "#333"], //0.1透明度的白色背景
  // });
  $.ajax({
    type: "post",
    url: "./php/login.php",
    data: {
      phone: phone,
      password: password,
    },
    dataType: "json",
    // dataType: "dataType",
    success: function (res) {
      var loadindex = layer.load(1, {
        shade: [0.5, "#333"], //0.1透明度的白色背景
      });

      // const {status, msg} = res;
      // console.log(res.meta.status);
      // console.log(res.status);
      // console.log(msg);

      // var msgindex = layer.msg(msg);
      if (res.meta.status == 0) {
        // alert("登录成功");
        layer.msg("登录成功");
        // 设置cookie
        setCookie("username", $('[name="username"]').val());
        if ($("[name='rememberusername']").prop("checked")) {
          setCookie(
            "rememberusername",
            $('[name="username"]').val(),
            7 * 24 * 3600
          );
        }
        setTimeout(() => {
          layer.close(loadindex);
          location.href = "xiaomi.html";
        }, 2000);
      } else {
        layer.msg("用户名或密码错误");
        setInterval(() => {
          location.href = "login.html";
        }, 1000);
      }
    },
  });
});

$("#reg").on("click", function () {
  // alert(1);
  let phone2 = $("#regphone").val();
  let password2 = $("#regpwd").val();
  console.log(phone2);
  console.log(password2);
  var phone = document.querySelector("[name='phoneNumber']").value;
  var reg = /^\d{11}$/;
  if (!reg.test(phone)) {
    layer.msg("输入正确的手机号");
    return false;
  }
  $.ajax({
    type: "post",
    url: "./php/register.php",
    data: {
      phone2: phone2,
      password2: password2,
    },
    // dataType: "dataType",
    success: function (res) {
      // console.log(res);
      // if (res == 'success')
      if (res == "success") {
        alert("注册成功");
        location.href = "./login.html";
      } else {
        // $('.login-fail').text('注册成功');
        layer.msg("该手机号已被注册");
        location.href = "./login.html";
      }
    },
  });
});
export default Reg;
