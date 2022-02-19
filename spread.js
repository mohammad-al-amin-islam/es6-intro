const number = [23,45,342,24,332];
console.log(number);
console.log(...number);

const max = Math.max(34,56,7);
const max2 = Math.max(...number);
console.log(max,max2);

//if we want to add only number value not updated;
const newArray = [12,...number,85];//we can also add value infront and last to the array
number.push(15);
console.log(number);
console.log(newArray);