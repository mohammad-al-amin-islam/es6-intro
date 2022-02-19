//we will not use var anymore insha allah;

let name = 'alamin';
name = 'alamin islam'; //if we re assign value using let .it will not do any problem;

const value = '234';
//value = '432'; //if we reassign const it will occur error;

const number = [2,3,4,5];
number[1] =  1;
number.push(6);
console.log(number);//we can make changes to const variable. it will not occur any error;

for(let i = 0; i <number.length; i++){
    const number = number[i];
}


//another example 
const object = {name: 'alamin',age:24}
object.name = 'alamin islam';
console.log(object);
