// 탭 메뉴 반복문으로 하기, 반복문을 쓸때는 let을 써야함
/*for (let i = 0; i < $(".tab-button").length; i++) {
  $(".tab-button")
    .eq(i)
    .click(function () {
      $(".tab-button").removeClass("active");
      $(".tab-content").removeClass("show");
      $(".tab-button").eq(i).addClass("active");
      $(".tab-content").eq(i).addClass("show");
    });
}*/

// 탭 메뉴 Function 이용 및 버블링을 활용하기
$(".list").click(function (e) {
  tab(e.target.dataset.id);
});

function tab(i) {
  $(".tab-button").removeClass("active");
  $(".tab-content").removeClass("show");
  $(".tab-button").eq(i).addClass("active");
  $(".tab-content").eq(i).addClass("show");
}
