

function addNum (num1,num2=0 /* with es6 */){

    /* //previouly handled option 1
    num2 = num2 || 0; */

    /* //previouly handled option 2
    if(num2 == undefined){
        num2 = 0;
    } */

    const result = num1 + num2;
    return result;
}
const result = addNum(15);
console.log(result);

function addName (first,last ="chowdhury"){
    return first + " " +last;
}
const fullName = addName('alamin','sarder');
console.log(fullName);