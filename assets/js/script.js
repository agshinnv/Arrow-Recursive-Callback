"use scrict";

// const sum = function (a, b) {
//   return a + b;
// };

// const sum = (a, b) => {
//     return a + b;
// }

// console.log(sum(3,5));

// function test(){
//     for (let i = 0; i < arguments.length; i++) {

//         console.log(arguments[i]);

//     }
// }

// test(1,2,3,4,5);

// const test = () =>{
//     for (let i = 0; i < arguments.length; i++) {

//         console.log(arguments[i]);

//     }
// }

// test(1,2,3,4,5);

// function test(){
//     console.log(this);
// }

// const getSum = ()=>{
//     console.log(this);
// }

// test();
// getSum();

// let stu = {
//     name: "Agshin",
//     surname: "Valiyev",
//     age: 26,
//     fullName: () =>{
//         console.log(this);
//     },

//     fullData: function(){
//         console.log(this.name + " - " + this.surname + "- " + this.age);
//     }
// }

// stu.fullData();

// document.querySelector("button").addEventListener("click",function(){

//     this.style.backgroundColor = "red";
// })

// let elems = document.querySelectorAll("ul li");

// elems.forEach(elem=>{
//     elem.addEventListener("click",function(){
//         console.log(this.innerText);
//     });
// })

// function showResult(num1,num2) {

//     let str = "Your result:"

//     let res = sum(num1,num2);

//     console.log(str + " " + res);
// }

// function sum(a, b) {
//     return a + b;
// }

// showResult(5,7);

// for (let i = 5; i >= 1; i--) {

//     console.log(i);

// }

// function showNums(firstNum){

//     console.log(firstNum);
//     let nextNum = firstNum - 1;
//     if(nextNum > 0){
//         showNums(nextNum);
//     }

// }

// showNums(5);

// function getFactorial(num) {
//   if (num <= 1) {
//     return 1;
//   }

//   return num * getFactorial(num - 1);
// }

// console.log(getFactorial(5));


function sumOdd(n){
    
    return n % 2 == 1;

}

function sumEven(n){
    
    return n % 2 == 0;

}

function sumNums(arr,callback){
    let sum = 0;

    for (const item of arr) {

        if(callback(item)){

            sum+=item;
        }

    }

    return sum;
}

// function sumEvenNums(arr){
//     let sum = 0;

//     for (const item of arr) {

//         if(item %2 == 0){

//             sum+=item;
//         }

//     }

//     return sum;
// }

let nums = [1,2,3,4,5,6];

// console.log(sumNums(nums,sumOdd));

function test(n){
    return n > 3
}

let result = nums.filter(test);

console.log(result);