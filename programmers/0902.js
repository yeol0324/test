let a = ["classic", "pop", "classic", "classic", "pop"];
let b = [500, 600, 150, 800, 2500];

const array = {
  classic: { all: 1450, 1: 500, 3: 150, 4: 800 },
  pop: { all: 3100, 2: 6000, 5: 2500 },
};

solution(a, b);
function solution(genres, plays) {
  let obj = {};
  genres.forEach((e, i) => {
    obj[e] = new Map();
    // obj[e].set("all", (obj[e].get("all") || 0) + plays[i]);
    console.log(i, plays[i]);
    obj[e].set(i, plays[i]);
    // obj[e].set(i, plays[i]);
  });
  //   genres.forEach((e, i) => {
  //     obj[e].set(i);
  //   });
  console.log(obj);
  var answer = [];
  return answer;
}
