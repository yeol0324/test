// 프로그래머스 위장
let test = [
  ["crow_mask", "face"],
  ["blue_sunglasses", "face"],
  ["crow_mask", "neck"],
  ["blue_sunglasses", "neck"],
  ["crow_mask", "eye"],
  ["blue_sunglasses", "eye"],
];
// 1 2 3 4 5 6
// 1 3,4,5,6
// 2 3,4,5,6
// 1 35, 36, 45, 46
// 2 35, 36, 45, 46

solution(test);
function solution(clothes) {
  var answer = 1;
  let obj = {};
  clothes.forEach((element) => {
    obj[element[1]] = (obj[element[1]] || 0) + 1;
  });
  if (Object.keys(obj).length > 1) {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        answer = answer * (1 + element);
      }
    }
    return answer - 1;
  } else {
    return clothes.length;
  }
}
