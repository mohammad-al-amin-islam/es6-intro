const add = (num1, num2) => num1 + num2;
const sum = add(15, 15);
//console.log(sum);

const multiplication = (num1, num2, num3) => num1 * num2 * num3;
const result = multiplication(1, 2, 3);
//console.log(result);

const tenTimes = (num) => num * 10;
const value = tenTimes(10);

//In one parameter there we can use no brackets if we want;
const tenTimes = num => num * 10;
const value = tenTimes(10);
//console.log(value);

//if there is no parameters we have to give only barckets
const name = () => 'alamin';
const getName = name();
console.log(getName);

//for multiline problem we have to use second brackets
const doMath = (num1,num2) =>{
    const add = num1 + num2;
    const result = add * num1;
    return result;
}

const getResult = doMath(3,2);
console.log(getResult);