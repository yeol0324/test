//////////////////////////////////////////////////
////////////////////////////////////////////나 뽑기
// let board2 = [
//   [0, 0, 0, 0, 0],
//   [0, 0, 1, 0, 3],
//   [0, 2, 5, 0, 1],
//   [4, 2, 4, 4, 2],
//   [3, 5, 1, 3, 1]
// ]
// let moves2 = [1, 5, 3, 5, 1, 2, 1, 4]
// solution(board2, moves2)
// function solution(board, moves) {

//   var answer = 0

//   let box = []
//   moves.forEach((m) => {
//     board.some((e) => {
//       if (e[m - 1] !== 0) {
//         box.push(e[m - 1])
//         e[m - 1] = 0
//         return true
//       }
//     })
//     if (box.length >= 2 && box[box.length - 2] === box[box.length - 1]) {
//       box.pop()
//       box.pop()
//       answer += 2
//     }
//   })
////////////////////////////////////////////나 뽑기
//////////////////////////////////////////////////

//   moves.forEach((m) => {
//     board.some(function (e) {
//       if (e[m - 1] > 0) {
//         console.log(e[m - 1])
//         if (box[box.length - 1] == e[m - 1]) {
//           box.pop()
//           answer = answer + 2
//         } else {                                                            } else {
//           box.push(e[m - 1])                                                   box.push(e[m-1])
//           e[m - 1] = 0 // if 문 밖에서 해줬어야함...                          } e[m - 1] = 0
//         }
//         return true
//       }
//     })
//   })
//   return answer
// }

////////////////////////////////////////////포켓몬
//////////////////////////////////////////////////
// let nums1 = [3, 3, 3, 2, 2, 4]
// solution(nums1)
// function solution(nums) {
//   let getNum = nums.length / 2
//   let only = nums.filter((e, i) => {
//     return nums.indexOf(e) === i
//   })
//   if (only.length < getNum) {
//     return only.length
//   } else {
//     return getNum
//   }
/////////////Set 적극 사용하기
//   //     const getNum = nums.length / 2
//   //   const size = new Set(nums).size
//   //   return getNum > size ? size : getNum
// }
////////////////////////////////////////////포켓몬
//////////////////////////////////////////////////

let Eparticipant = ["mislav", "stanko", "mislav", "ana"];
let Ecompletion = ["stanko", "ana", "mislav"];
solution(Eparticipant, Ecompletion);
function solution(participant, completion) {
  var answer = "";
  const participantP = {};
  participant.forEach((x) => {
    participantP[x] = (participantP[x] || 0) + 1;
  });
  const completionP = {};
  completion.forEach((x) => {
    completionP[x] = (completionP[x] || 0) + 1;
  });
  for (const key in participantP) {
    if (Object.hasOwnProperty.call(participantP, key)) {
      const element = participantP[key];
      if (completionP[key] == element) {
        console.log("padd");
      } else {
        answer = key;
      }
    }
  }
  return answer;
}
