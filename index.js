import isEqual from "lodash/isEqual.js";

const obj1 = { name: "Sanjay", role: "Mentor" };
const obj2 = { role: "Mentor", name: "Sanjay" };

// console.log(obj1 === obj2);

let flag = true;
for (let key in obj1) {
  if (obj1[key] !== obj2[key]) {
    flag = false;
    break; // to break the loop
  }
}

console.log(flag);

// if (flag) {
//   console.log("Object are same");
// } else {
//   console.log("Object are different");
// }

const obj3 = {
  name: "Sanjay",
  role: "Mentor",
  bio: { weight: 90, height: 180 },
};
const obj4 = {
  role: "Mentor",
  name: "Sanjay",
  bio: { height: 180, weight: 90 },
};
console.log(obj3 === obj4);

// comparing using the lodash function
console.log(isEqual(obj3, obj4));

// this time we will use external library to compare the above objects
