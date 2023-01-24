import { userData1, userData2 } from "./data.js";
function getUsersInState(data, state1) {
  let filterArr = data.filter((ele) => ele.state === state1);
  console.log(filterArr.sort((a, b) => a.age - b.age));
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
