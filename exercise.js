// // TEMPLATE STRING 
// var user="yahoo"
// var greet=`${user}`
// console.log(greet)
// // OR
// var name="sakshi"
// var age=20
// console.log(`my name is ${name} and my age is ${age}`)
// // OR
// let firstname="achal"
// let lastname="zagade"
// function free(){
//      console.log(`my name is ${firstname} and my surname is ${lastaname}`)
// }


// // ARROW FUNCTION
// let hello=()=>console.log("hello")
// // OR
// let welcome =(name)=>`Welcome ${name}`
// console.log(welcome("yahoo",25))
// // OR
// let wel=(name,age)=>`welcome ${age}, ${name}`
// console.log(wel("yahoo"))


// // SPREAD OPERATOR - convert array into arguments
// function sum(...arg){
//      s=0
//      for (i of arg){
//           s+=i
//      }
//  return(s)
// }
// num=[23,34,56]
// console.log(sum(...num))


// // REST OPERATOR - convert arguments into array
// function array(...args){
//    return args
// }
// console.log(array(2,3,4,5))


// // DESTRUCTURING OF ARRAY - extracting the elements in array
// let arr=["sakshi","achal","aniket"]
// let [nam,sister,brother]=arr
// console.log(name,sister,brother)
// OR
// function user([name,age=20,city]){
//     console.log(name,age,city)
// }
// user(["sakshi",30,"akola"])
// OR
// let ar=["sakshi",30,"delhi"]
// let [name,...args]=ar
// console.log(...args)



// // DESTRUCTURING OF OBJECT - extracting the elements in object
// let user={name:"yahoo baba",age:25}
// let {name,age}=user
// console.log(name,age)
// OR
// let user={name:"yahoo baba",age:25}
// let {name:a,age:n}=user
// console.log(a,n)


// MAP - create a new array 
// const q=[5,3,4,6,7,8]
// function double(x){
//      return x>5
// }
// const output=q.map(double)
// console.log(output)
// OR
// arr=[3,4,5,22,6,8,42]
// function iseven(x){
//      return x>5
// }
// const output=arr.map(iseven)
// console.log(output)


// FILTER
// arr=[3,4,5,22,6,8,42]
// function iseven(x){
//      return x>5
// }
// const output=arr.filter(iseven)
// console.log(output)


// REDUCE
// arr=[3,4,5,22,6,8,42]
// let output=arr.reduce((accum,cur)=>{
// let avg=accum+cur
// return avg},0)
// console.log(output)

// // OR
// var people=[{name:"abc",age:30},{name:"cba",age:20},{name:"bca",age:25}]
// let sum=people.reduce((total,per)=>total+per.age)
// console.log(sum)

// // OR
// ar=[2,3,4,5]
// let o=ar.reduce((a,b)=>{
//      a+b
//      console.log(a,b)
//      return a+b
// },1)
// console.log(o)


// // SYNCHRONOUS
// const func=()=>{
//      console.log("func is starting")
// }
// const fun1=()=>{
//      console.log("fun1 is starting")
//      func()
//      console.log("function is ending")
// }
// fun1()


// // ASYNCHRONOUS
// const fun2=()=>{
//      setTimeout(()=>{
//           console.log("fun2 is starting")
//      },3000)
// }
// const fun1=()=>{
//      console.log("fun1 is starting")
//      fun2()
//      console.log("fun1 is ending")
// }
// fun1()


// PROMISE
// const promiseobj1= new Promise((resolve,reject)=>{
//   let req=true
//   if (req==true){
//     resolve("request success")
//   }else{
//     reject("rejected")
//   }
// })
// promiseobj1.then(
//   (value)=>{console.log(value)},
//   (error)=>{console.log(error)}
// )

// const promiseobj=new Promise((resolve,reject)=>{
//   let req=false
//   if (req==true){
//     resolve([1,2,3,4,5,6,7])
//   }else{
//     reject("Request Rejected")
//   }
// }).then(
//   (value)=>{console.log(value)
//   }).catch(
//   (error)=>{console.log(error)}
// ).finally(()=>{console.log("cleaned")})

// function getname(name){
//   return new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         console.log("inside name settimeout")
//         resolve(name)
//         reject()
//       },1000)
//   })
// }

// getname("sakshi").then((output)=>{console.log("then",output)
// }).catch((eroor)=>{console.log("catch",eroor)})
// // await KEYWORD
// async function show(){
//   const nm=await getname("sonam")
//   // const hobby=await(nm)
//   console.log(nm)
// }
// console.log("end")
// show()


// CALLBACK
// const per=(friend,callfriend)=>{
//      console.log(`I am busy right now. I am talking to ${friend}`)
//      callfriend()
// }
// const pertwo=()=>{
//      console.log("hey whatsup.i will call u later")
// }
// per("thapa",pertwo)


// CALLBACK HELL
// const func=()=>{
//      setTimeout(() => {
//        let num=[1,2,3,4]   
//        console.log(num[0])
//        setTimeout(() => {
//             let info={
//                  name:"sakshi",
//                  sub:"maths"
//             }
//             console.log(`my name is ${info.name} fav is ${info.sub} roll no is ${num[0]}`)
//             setTimeout(() => {
//                  info.hobby="crafting"
//                  console.log(`my name is ${info.name} roll no is ${num[0]} also hobby is ${info.hobby}`)
//             },2000 );
       
//           },1000);
//      },2000)
// }
// func()


// HIGHER ORDER FUNCTIONS
// const interview=(name)=>{
// if(name==="sakshi"){
//      return function(topic){
//           console.log(`my name is ${name},and topic is ${topic}`)
//      }
// }
// if(name==="achal"){
//      return function(topic){
//           console.log(`my name is ${name} and topic s ${topic}`)
//      }
// }
// else{
//  console.log("your interview is not decided")
// }
// }
// interview("sakshi")("social media")
// interview("achal")("mobile")
// interview("aniket")


// SETTIMEOUT AND CLEARTIMEOUT
// time=setTimeout(() => {
//   console.log("okay")   
// }, 2000);
// clearTimeout(time)

// SETINTERVAL AND CLEARINTERVAL
// function show(){
//      console.log("fine")
//      let data=setInterval(show,1000)
//      clearInterval(data)
// }
// show()

// let soup=setInterval(function sho(){
// console.log("write")
// },1000)
// clearInterval(soup)


// asyn KEYWORD
// async function f(){
//      console.log("async function")
//      return Promise.resolve(1)
// }
// f().then(function(result){
//      console.log(result)
// })


// let promise=new Promise(function(){
//      setTimeout(function(){
//      resolved("promise resolved")
// },1000)})
// async function asynfun(){
//      try{
//           let result=await Promise
//           console.log(result)
//      }
//      catch(error){
//           console.log(error)
//      }
// }
// asynfun()

// // CALL
// const youtuber={name:"sakshi",content:"program",
// feature:function(rating,support){
//      console.log(` ${this.name} , ${this.content} , ${rating} ${support}`)
// }}
// const youtuber2={name:"achal",content:"programming"}
// youtuber.feature.call(youtuber,5,"subscibe")
// console.log(call)

// let m=Math.max.call(1,6,7,4,5,3)
// console.log(m)


// // APPLY
// let m=Math.max.apply(null,[1,6,7,4,5,3])
// console.log(m)

// const youtuber ={name:"sakshi",
//                 content:"program",
//                 feature: function f(a,b) {
//                 console.log(`${this.name}`,a,b  ) 
//               }
//             }
// youtuber.feature.apply(youtuber,["derek","sdfg"])

// const youtuber ={name:"sakshi",
//                 content:"program"
//             }
//             feature= function f(a,b) {
//               console.log(`${this.name}`,a,b  ) 
//             }
// feature.apply(youtuber,["derek","sdfg"])


// BIND
// let youtuber1={name:"sakshi",class:"12"}
// let youtuber2={name:"achal",class:10}
// function feature(){
//      console.log(`my name is ${this.name} and my class is ${this.class}`)
// }
// var result=feature.bind(youtuber1)
// var result1=feature.bind(youtuber2)
// result1()

// closure
// function x(){
// var b=7
// return function y(){
//      console.log(b)
// }
// }
// var z=x()
// console.log(z)
// z()


// FIRST ORDER FUNCTION









