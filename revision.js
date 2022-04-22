// var calculation={
//  sum:function(a,b){return a+b},
//  multiply:function(a,b){return a*b}
// }
// console.log(calculation.sum(3,4))
// console.log(calculation.multiply(3,4))

// const question = require("readline-sync")

// // property shorthand
// var a=3; b=5; c=6;
// obj={a,b,c}
// console.log(obj)

// var a=3; b=5; c=6;                                                                                            
// obj=[a,b,c]
// console.log(obj)

// // name function
// function sak(){
//   console.log("hello")
// }
// // self invoked
// (function (){
//      console.log("hello")
// }())

// // anonymous function
// var greet = function () {
//     console.log("Welcome to GeeksforGeeks!");
// };  
// greet();

// // ARROW FUNCTION
// let google=(show)=>{
//      console.log(show)
// }
// google("sakshi")

// let show=new Promise((resolve,reject)=>{
//     var a=20;
//     if (a=="20"){
//          resolve("solved")
//     }
//     else{
//          reject("error")
//     }
// }).then((resolve)=>{
//      console.log(resolve)
// },(error)=>{
//      console.log(error)
// })

// function show(greet,name){
//      console.log(name)
//      greet()
// }
// function never(){
//      console.log("YOU")
// }
// show(never,"sakshi")

// // rest operator
// function sum (...args){
//      console.log(...args)
// }
// sum(1,2,3,4,5,6,3)

// // spread
// function mul(arg){
//      console.log(arg)
// }
// n=[1,2,3]
// mul(...n)

// // swapping
// // addition
// var x=10;
// var y=20;
// x=x+y
// y=x-y
// x=x-y
// console.log(x,y)

// // using 3rd variable
// var x=10;
// var y=20;
// var z=x
// x=y
// y=z
// console.log(x,y)

// // division 
// var x=10;
// var y=20;
// x=x*y
// y=x/y
// x=x/y
// console.log(x,y)

// var x=10;
// var y=20;
// x,y==y,x;
// console.log(x,y)

// // program to display value
// let a = 4;

// function greet() {
//     b = 'hello';
//     console.log(b); // hello
//     let b;
// }

// greet(); // hello
// console.log(b);

// // switch case
// da=require("readline-sync")
// day=da.question("enter the day")
// switch (day){
// case "monday":
//      day1=da.question("enter the day")
//      switch (day1){
//        case "lunch":
//           console.log("jtvsdfucYS")
//      }
// break
// case "tuesday":
// console.log("hewutycDS")
// default:
//      console.log("oidwqyicAS")
// }

// da=require("readline-sync")
// ope1=da.questionInt("enter the number")
// ope2=da.questionInt("enter the number")
// ope=da.question("enter the operator")
// switch (ope){
//      case "+":
//           console.log(ope1+ope2)
//           break
//      case "-":
//           console.log(ope1-ope2)
//           break
// }

// // 5 types of loop
// for(i=0;i<=5;i++){
//      console.log(i)
// }

// num={name:"sakshi",name1:"achal",sub:"science"}
// for (i in num){
//      console.log(i)
// }

// num=[4,5,6,7,8,2]
// for (i of num){
//      console.log(i)
// }

// i=1;
// while (i<=1){
//      console.log(i)
//      i++
// }

// i=0
// do{
//      console.log(i)
//      i++
// }while(i<=5)

// num=[2,3,4,5,6,8,9,10]
// num.splice(0,2)
// console.log(num) //remove form indexing
// num.push(3)
// console.log(num) //add at end
// num.unshift(4)
// console.log(num) //add at starting
// num.shift()
// console.log(num) //remove first element
// num.pop()
// console.log(num) //remove last element

// a=["sakshi","achal",""]
// b=["shivam","aniket"]
// // c=a.concat(b)
// // console.log(c)
// co=a.indexOf("")
// console.log(co)

// var obj={
//      l:1,
//      h:2
// }
// if ("b" in obj===false){
//     obj.b=12
// }
// console.log(obj.b)

// var x=0;
// function fun(){
//      x++;
//      this.x=x;
//      return x
// }
// var bar=new fun;
// console.log(bar.x)

// let sum=0
// const a=[1,2,3]
// a.forEach(get)
// console.log(sum)
// function get(ele){
//      sum+=ele
// }

// function solve(arr,rota){
//      if (rota==0) return arr
//      for (let i=0; i<rota; i++){
//           let element=arr.pop()
//           arr.unshift(element)
//      }
//      return arr
// }
// console.log(solve([44,1,22,111],5))

// function double(num){
//    num%2==0
// }
// num=[6,7,9,3,4]
// console.log(map.double(num))

// function name(x) {
//      num%2==0
     
// }
// num=[1,2,3,4,5]
// console.log(map.name(num))