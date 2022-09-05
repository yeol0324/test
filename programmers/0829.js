let survey1 = ["AN", "CF", "MJ", "RT", "NA"];
let choices1 = [5, 3, 2, 7, 5];
// result	"TCMA"
// 1번 지표	라이언형(R), 튜브형(T)
// 2번 지표	콘형(C), 프로도형(F)
// 3번 지표	제이지형(J), 무지형(M)
// 4번 지표	어피치형(A), 네오형(N)
solution(survey1, choices1);
// function solution(survey, choices) {
//   let obj = {};
//   choices.forEach((e, i) => {
//     e > 3
//       ? (obj[survey[i].split("")[1]] =
//           (obj[survey[i].split("")[1]] || 0) + e - 4)
//       : (obj[survey[i].split("")[0]] =
//           (obj[survey[i].split("")[0]] || 0) + (-e + 4));
//   });
//   var answer = "";
//   if (obj["R"] >= obj["T"] || obj["T"] == undefined) {
//     answer += "R";
//   } else {
//     answer += "T";
//   }
//   if (obj["C"] >= obj["F"] || obj["F"] == undefined) {
//     answer += "C";
//   } else {
//     answer += "F";
//   }
//   if (obj["J"] >= obj["M"] || obj["M"] == undefined) {
//     answer += "J";
//   } else {
//     answer += "M";
//   }
//   if (obj["A"] >= obj["N"] || obj["N"] == undefined) {
//     answer += "A";
//   } else {
//     answer += "N";
//   }
//   return answer;
// }
// map 함수 활용해서 만들어보자
function solution(survey, choices) {
  // let obj = {};
  let obj = new Map();
  // choices.forEach((e, i) => {
  //   e > 3
  //     ? (obj[survey[i].split("")[1]] =
  //         (obj[survey[i].split("")[1]] || 0) + e - 4)
  //     : (obj[survey[i].split("")[0]] =
  //         (obj[survey[i].split("")[0]] || 0) + (-e + 4));
  // });

  //유형을 알려 줬기 때문에 map 함수에 set 을 해주고 시작 기존은 undefined 가 있어서 비교문이 복잡해졌음
  ["R", "T", "C", "F", "J", "M", "A", "N"].forEach((item) => obj.set(item, 0));
  choices.forEach((item, index) => {
    let [A, B] = survey[index].split("");
    item > 4
      ? obj.set(B, obj.get(B) + item - 4)
      : obj.set(A, obj.get(A) + 4 - item);
  });
  var answer = "";
  answer += obj.get("R") >= obj.get("T") ? "R" : "T";
  answer += obj.get("C") >= obj.get("F") ? "C" : "F";
  answer += obj.get("J") >= obj.get("M") ? "J" : "M";
  answer += obj.get("A") >= obj.get("N") ? "A" : "N";
  return answer;
}

// 해시 - 베스트앨범
let genres1 = ["a", "b", "b", "c", "c"];
let plays1 = [30, 40, 40, 5, 5];
solution2(genres1, plays1);
// function solution2(genres, plays) {
//   let obj = new Map();
//   let arr = [];
//   genres.forEach((e, i) => {
//     obj.set(e, obj.get(e) ? obj.get(e) + plays[i] : 0 + plays[i]);
//     arr.push([e + i, plays[i]]);
//   });
//   let obj2 = Array.from(obj);
//   var answer = [];

//   obj2.sort((a, b) => b[1] - a[1]);
//   arr.sort((a, b) => b[1] - a[1]);
//   console.log(obj2);
//   console.log(arr);
//   obj2.forEach((e) => {
//     let result = 0;
//     arr.forEach((x) => {
//       if (x[0].indexOf(e[0]) >= 0 && result < 2) {
//         result += 1;
//         answer.push(Number(x[0][x[0].length - 1]));
//       }
//     });
//   });
//   console.log(answer);
//   return answer;
// }
function solution2(genres, plays) {
  let obj = {};
  let arr = [];
  let answer;
  genres.forEach((e, i) => {
    if (!obj[e]) obj[e] = [];
    let info = {
      e,
      play: plays[i],
      index: i,
    };
    obj[e].push(info);
  });
  console.log(obj);
  // let obj2 = Array.from(obj);
  // var answer = [];

  // obj2.sort((a, b) => b[1] - a[1]);
  // arr.sort((a, b) => b[1] - a[1]);
  // console.log(obj2);
  // console.log(arr);
  // obj2.forEach((e) => {
  //   let result = 0;
  //   arr.forEach((x) => {
  //     if (x[0].indexOf(e[0]) >= 0 && result < 2) {
  //       result += 1;
  //       answer.push(Number(x[0][x[0].length - 1]));
  //     }
  //   });
  // });
  // console.log(answer);
  return answer;
}
