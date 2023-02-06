// use inside java script data-type parentheses(beacket)
console.log('string');
console.log(123);
console.log(true);


let arr = [1, 2, 3, 4, 5];
console.log(arr);

//javascript Data-type
//string,number, bolean, Array,null,undefined

//number
//arthematic operator
//assigment  operator


//boolean operator
//logical
//comparision


//string revision

//length//
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length);

//slice
let text1 = "Apple, Banana, Kiwi";
let part = text1.slice(7, 13); //first and second position
console.log(part);

//substring//
let str = "Apple, Banana, Kiwi";
let text2 = str.substring(7, 13); //first and second position
console.log(text2);
let text3 = str.substring(7); //first to last
console.log(text3);


let str7 = 'apple orange';
let first = str7.substr(0,5);
let last = str7.substr(6);

let text7 = last.concat(" ", first);
console.log(text7);


let dov = 'dog';
let first1 = dov.substr(0,1);
let mid = dov.slice(1,-1);
let last1 = dov.slice(-1);

let dov1 = last1 +mid + first1;
console.log(dov1);