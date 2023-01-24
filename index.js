import { userData1, userData2 } from "./data.js";

function SortArr(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  // return pivot;
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].Age < pivot.Age) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...SortArr(left), pivot, ...SortArr(right)];
}

function getUsersInState(data, state1) {
  let filterArr = data.filter((ele) => ele.state === state1);
  console.log(SortArr(filterArr));
  let initialValue = 0;
  let AverageAge = filterArr.reduce(
    (sum, curr) => sum + curr.age,
    initialValue
  );
  console.log("AverageAge: " + Math.round(AverageAge / filterArr.length));
}

getUsersInState(userData1, "NY");
getUsersInState(userData2, "CA");
getUsersInState(userData2, "TX");
