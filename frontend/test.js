console.log("Hello World");
// let x=10;
// console.log(x);
// const y=20;
// console.log(y);
// console.log(x+y);
function add(x,y){
    return x+y;

}
// console.log(add(10,20));
const arr=[10,20,30,40,50]
let[a,b,c,d,e]=arr;
console.log(arr[a]);
console.log(arr[b]);
console.log(arr[c]);
console.log(arr[d]);
console.log(arr[e]);

//dictionary
const dict={"name":"John","age":30,"city":"New York"};
console.log(dict.name);

//destructing
let{name,age,city}=dict;
console.log(name);
console.log(age);

//rest and spread
//spread operator
// let a=[10,20]
// let b=[30,40]
// console.log(...a,...b);
// console.log([...a,...b]);

//rest operator-->...(variable name)
// function add(a,...b){
//     return a+b;
// }
// console.log(add(10,20));
// console.log(add(10,20,30));
// console.log(add(10,20,30,40));


//Template literals
// const a=10;
// const b=20;
// console.log(`The sum of ${a} and ${b} is ${a+b}`);
