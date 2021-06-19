import $ from "./library/jquery.js";
import cookie from "./library/cookie.js";

let shop = cookie.get("shop");

if (shop) {
  shop = JSON.parse(shop);

  let idList = shop.map((el) => el.id).join();

  $.ajax({
    type: "get",
    url: "./php/getItems.php",
    data: { idList: idList },
    dataType: "json",
    success: function (res) {
      let temp = "";
      console.log(res);
      res.forEach((elm) => {
        let picture = JSON.parse(elm.picture);

        // 让ajax请求到的数据结果中遍历后的id与cookie中数据的id 相同
        let current = shop.filter((val) => val.id == elm.id);

        temp += `<div class="list-body">
            <div class="col-check">
            <i class="icon-checkbox">
            <div class="p-check">
                    <input type="checkbox" name="selectOne">
                </div>
            </i>
            
        </div>
        <div class="col-img">
            <a href=""><img src="${picture[0].src}" alt=""></a>
        </div>
        <div class="col-name">
            <div class="tags"></div>
            <h3>
                <a href="">${elm.title}</a>
            </h3>
        </div>
        <div class="col-price">
        ${parseFloat(elm.price).toFixed(2)}元
            <p class="pre-info"></p>
        </div>
        <div class="col-num">
            <div class="change-goods-num">
                <a href="javascript:;"><i>-</i></a>
                <input class="goods-num-1 number" type="number" name="number" id="" value="${
                  current[0].num
                }" max="${elm.num}" min="1">
                <a href="javascript:;"><i>+</i></a>
            </div>
        </div>
        <div class="col-total subtotal">
        ${(elm.price * current[0].num).toFixed(2)}元
            <p class="pre-info"></p>
        </div>
        <div class="col-action">
            <a href="javascript:;" title="删除" class="del" data-id="${elm.id}">
                <i>X</i>
            </a>
        </div></div>`;
      });
      $(".list-big")
        .append(temp)
        .find(".del")
        .on("click", function () {
          let res = shop.filter((el) => el.id != $(this).attr("data-id"));
          cookie.set("shop", JSON.stringify(res), 1);
          location.reload();
        });
    },
  });
  // select();
  // addAndReduce();
  //   total();
  // }
  // function total() {
  //   var tatalNum = 0;
  //   var totalPrice = 0;
  //   $('[name = "selectOne"]:checked').each(function (i, v) {
  //     totalNum +=
  //       $(v).parent().siblings(".number").find('input[name="number"]').val() - 0;
  //     totalPrice += $(v).parent().siblings(".subtotal").find("span").text() - 0;
  //   });
  //   console.log(totalNum);
  //   $(".totalNum").text(totalNum);
  //   $(".totalPrice").text(totalPrice);
}
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
