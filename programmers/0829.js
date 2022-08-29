let survey1 = ["AN", "CF", "MJ", "RT", "NA"];
let choices1 = [5, 3, 2, 7, 5];
// result	"TCMA"
// 1번 지표	라이언형(R), 튜브형(T)
// 2번 지표	콘형(C), 프로도형(F)
// 3번 지표	제이지형(J), 무지형(M)
// 4번 지표	어피치형(A), 네오형(N)
solution(survey1, choices1);
function solution(survey, choices) {
  let obj = {};
  choices.forEach((e, i) => {
    e > 3
      ? (obj[survey[i].split("")[1]] =
          (obj[survey[i].split("")[1]] || 0) + e - 4)
      : (obj[survey[i].split("")[0]] =
          (obj[survey[i].split("")[0]] || 0) + (-e + 4));
  });
  var answer = "";
  console.log(obj);
  if (obj["R"] >= obj["T"] || obj["T"] == undefined) {
    answer += "R";
  } else {
    answer += "T";
  }
  if (obj["C"] >= obj["F"] || obj["F"] == undefined) {
    answer += "C";
  } else {
    answer += "F";
  }
  if (obj["J"] >= obj["M"] || obj["M"] == undefined) {
    answer += "J";
  } else {
    answer += "M";
  }
  if (obj["A"] >= obj["N"] || obj["N"] == undefined) {
    answer += "A";
  } else {
    answer += "N";
  }
  console.log(answer);
  return answer;
}
