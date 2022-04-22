// spread  
// function def(...args){
//    console.log(...args)
// }
// a=[1,2,3,4,5,6]
// def(a)

// rest 
// function sak(...args){
//     console.log(...args)
// }
// sak(2,3,4,5,6)

// destructuring array
// let a=["name","sakshi","achal"]
// let [b,c,d]=a
// console.log(b,c,d)

// destructuring object
// let s={a:"sakshi",b:"achal",c:"aniket"}
// let {a:e,b:f,c:g}=s
// console.log(e,f,g)

// let s={a:"sakshi",b:"achal",c:"aniket"}
// let {a,b,c}=s
// console.log(a,b,c)

// asynchronous 
// function fan(){
//     setTimeout(()=>{
//        console.log("you are good as the way you are")
//     },1000)
// }
// fan()
// console.log("dont compare")

// synchronous
// function fan(){
//     asy()
//     console.log("Ihatesomeone")
// }
// function asy(){
//     console.log("start")
// }
// fan()

// callback
// function as(name,callback){
//       console.log("all the best")
//       callback()
// }
// function sak(){
//     console.log("BEST LUCK NEXT TIME")
// }
// as("sakshi",sak)

// arrow function
// let sam=()=>{console.log("I AM YOUR SISTER")}
// sam()

// map
// function double(x){
//    return x*2
// }
// num=[2,3,4,5,6,7]
// console.log(num.map(double))

// filter
// function double(x){
//     return x>5
//  }
//  num=[2,3,4,5,6,7]
//  console.log(num.filter(double))

// reduce
// num=[4,5,8,7,6]
// let n=num.reduce((accum,curr)=>{
//     return accum+curr
// },2)
// console.log(n)

// call
// let same={name:"sakshi",feature:function sum(a,b){
//      console.log(`${this.name}`,a,b)
// }}
// same.feature.call(same,4,5)

// apply
// let same={name:"sakshi",feature:function sum(a,b){
//      console.log(`${this.name}`,a,b)
// }}
// same.feature.apply(same,[4,5])

// bind
// let same={name:"sakshi",surname:"zagade"}
// let same1={name:"sakshu",sub:"science"}
// function sum(){
//      console.log(`${this.name}`)
// }
// let user=sum.bind(same)
// user()
// let user1=sum.bind(same1)
// user1()

// promise
// let sum=new Promise(function(resolve,reject){
//      setTimeout(()=>{
//           console.log("anytime")
//      },1000)
//      let s="sakhi"
//      if (s=="sakshi"){resolve("solved")}
//      else{reject("rejected")}
// }).then((s)=>{
//      console.log(s)
// }). catch ((error)=>{
//      console.log(error)
// })

// a=["zero","one","two","three","four","five","six"]
// n=require("readline-sync")
// num=n.question("enter the number")
// for (i in a){
//      if (i==num){
//           console.log(a[i])
//      }
// }
// s=[]
// for (j of num){
//      s.push(j)
// } 
// d=""
// for (k of s){
//      for (i in a){
//      if (k==i){
//          d+=a[i]
//      }   
// }
// }
// console.log(d)

// reduce
// sum=[2,3,4,5,6,7]
// let s=sum.reduce((accum,curr)=>{
//    return accum+curr
// },2000)
// console.log(s)             

// sum=[2,3,4,5,6,7]
// function double(x){
//    return x>2
// }
// console.log(sum.filter(double))

// sum=[2,3,4,5,6,7]
// function max(y){
//    return y>=5
// }
// console.log(sum.filter(max))

let a={name:"sakshi",feature:function sum(name,surname){
   console.log(`hello ${this.name}  my name is ${name} ${surname}`)}}
a.feature.call(a,"achal","zagade")
a.feature.apply(a,["anu","patil"])

function sum(){
   console.log(`My name is ${this.name} and my surname is ${this.surname}`)
}
d={name:"sakshi",surname:"zagade"}
p={name:"achal",surname:"patil"}
let user=sum.bind(d)
user()

// let e=new Promise((resolve,reject)=>{
//  setTimeout(()=>{
//     str="sakshi"
//     if (str.includes("s")===true){
//        resolve("solved")
//     }
//     else{
//        reject("error")
//     }
//     console.log("I am present")},2000)
// }).then((resolve)=>{console.log(resolve)
// },(reject)=>{console.log(reject)})

/*loop have 5 types*/
// while
// i=0
// while (i<=5){
//    console.log(i)
//    i++
// }

// do while loop
// let i=1
// do{
//    console.log(i)
//    i++
// }while(i<=5)

// for loop
// for (i=0;i<=5;i++){
//    console.log(i)
// }

// num=[1,2,3,4,5]
// for(i of num){
//    console.log(i)
// }

// n={a:10,b:20,c:30}
// for (i in n){
//    console.log(n[i])
// }

// let s=(10>5)?true:false
// console.log(s)


// sum=[2,3,4,5,6,7]
// function double(x){
//    return x*2
// }
// console.log(sum.map(double))

// function  sum(x) {
//     console.log(x*2)
// }
// num=[1,2,3,4,5]
// let user=num.map(sum(num))
// // user()

 // name function
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

// let value=true
// function num(){
//     return new Promise((resolve,reject)=>{
//     if (value===true){
//         solved="The promise is solved."
//         resolve(solved)
//     }
//     else{
//         error="the promise is rejected."
//         reject(error)
//     }
// }).then((solved)=>{
//     console.log(solved)
// }).catch((error)=>{
//     console.log(error)
// })
// }
// async function name1() {
//     await num()
//     console.log("complete")
// }
// name1()

// function name(params) {
//     setTimeout(()=>{
//         console.log("complete")
//     },1000)
//     console.log(params)
// }
// name("saskhi")