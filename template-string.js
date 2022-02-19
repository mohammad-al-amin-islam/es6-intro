//three types of coat
const piya = 'asif akbar';
const meye = "tumi ki dukkho chino";
const kobita = `kobita tumi sopno charini hoye khobor nio na`;

//previouly write multiline
const oldMultiline = 'tumi amay vebo na \n'+
'shukher mohona'+
'dekhbe amader hoye geche koto fike';

//console.log(oldMultiline);

//new multiline code
const newMultiline = `kobita tumi sopno charini hoye khobor
nio na tumi nesachor amay vebo na
shuker mohona`;
 //console.log(newMultiline);


//  for making dynamic
const friends = ['a','b','c']; 
let count = 5;
const old = '<h3 class="friends-name">New Friend 5</h3>'
const old2 = '<h3 class="friends-name">New Friend '+count+'</h3>';
const new1 = `<h3 class="friends-name">New Friend ${friends.length}</h3>` //${here we can write any valid js expression
const new1 = `<h3 class="friends-name">New Friend ${count}</h3>` //${here we can write any valid js expression
//console.log(new1);

const first = 'mr';
const last = 'w';
const newAdd =`Name : ${first} ${last}.
Has money : ${friends.length*500}
he lives in dhaka `;
console.log(newAdd);