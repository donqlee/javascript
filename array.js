var 출석부 = ["흥민", "영희", "철수", "재석"];

function 이름찾기(name) {
  for (let i = 0; i < 출석부.length; i++) {
    if (name == 출석부[i]) {
      console.log("있어요");
      return;
    }
  }
}

function 목표계산기(판매실적어레이, 평균월별판매량) {
  var 실적5개월 = 0;
  for (var i = 0; i < 5; i++) {
    실적5개월 = 실적5개월 + 판매실적어레이[i];
  }

  var 실적12월 = 6 * 평균월별판매량 - 실적5개월;
  console.log(실적12월);
}
