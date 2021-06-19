import $ from "./library/jquery.js";
$("#reg").on("click", function () {
  // alert(1);
  let phone2 = $("#regphone").val();
  let password2 = $("#regpwd").val();
  var phone = document.querySelector("[name='phoneNumber']").value;
  console.log(phone2);
  console.log(password2);
  var reg = /^\d{11}$/;
  if (!reg.test(phone)) {
    alert("输入正确的手机号码");
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
      // var loadindex = layer.load(1, {
      //   shade: [0.5, "#333"], //0.1透明度的白色背景
      // });

      // console.log(res);
      // if (res == 'success')
      if (res == "success") {
        alert("注册成功");

        // layer.close(loadindex);
        location.href = "login.html";
      } else {
        // $('.login-fail').text('注册成功');
        alert("该手机已注册,请登录");
        location.href = "login.html";
      }
    },
  });
});

export default Reg;
