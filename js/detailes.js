import $ from "./library/jquery.js";
import cookie from "./library/cookie.js";
// 通过seach获得商品id
let id = location.search.split("=")[1];

$.ajax({
  type: "get",
  url: "./php/getitem.php",
  data: {
    id: id,
  },
  dataType: "json",
  success: function (res) {
    console.log(res);
    let picture = JSON.parse(res.picture);

    let temp = `
                    <img class="pic-phone" src="${picture[1].src}" alt="">
                `;

    $(".item").append(temp);

    let title = res.title;
    let details = res.details;
    let price = res.price;
    // let num=res.num;
    let title1 = `<h2>${title}</h2>
        <p class="sale-desc">${details}</p>
        
        <p class="company-info">小米自营</p>
        
        <div class="product-price">
                <span>${price}元</span>
        </div>
        
        `;
    $(".detail-phone").append(title1);

    let temp1 = `<ul>
        <li>
            ${title}
                <span>${price}元</span>
            </li>
        </ul>
        <div class="total-price">
            总计：${price}元
        </div>
        `;
    $(".selected-list").append(temp1);
    let temp2 = `<div class="btn-box">
        <input type="number" id="num" value="1" min="1" max="${res.num}">
        <a href="car.html" id="additem">加入购物车</a>
        <a href=""><img src="images/like.png" alt=""></a>
    </div>`;

    $(".btn-box")
      .append(temp2)
      .find("#additem")
      .on("click", function () {
        addItem(res.id, res.price, $("#num").val());
      });
  },
});

function addItem(id, price, num) {
  let shop = cookie.get("shop");

  let product = {
    id,
    price,
    num,
  };

  // 判断当前cookie中是否有购物数据
  if (shop) {
    // 如果有数据 取出是一个字符串
    shop = JSON.parse(shop);

    // 添加之前先要判断数据中有没有该商品
    if (shop.some((el) => el.id === id)) {
      let _index = shop.findIndex((elm) => elm.id == id);
      let count = parseInt(shop[_index].num);
      count += parseInt(num);
      shop[_index].num = count;
    } else {
      shop.push(product);
    }
  } else {
    // 第一次没有数据的情况 创建一个新数据
    shop = [];
    shop.push(product);
  }

  cookie.set("shop", JSON.stringify(shop), 1);
}
if (getCookie("username")) {
  $(".log")
    .html("用户" + getCookie("username") + "欢迎进入小米网站")
    .attr("href", "#");
  $(".reg").html("退出").attr("href", "#");
  $(".logn-notice").css("display", "none");
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
