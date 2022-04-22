// // 1.
// var arr1=[10,20,30,40]
// var arr2=[...arr1]
// arr1.push(50)
// console.log(arr1)
// console.log(arr2)

// // 2.
// function sum(name,...args){
//      console.log(`hello ${name}`)
//      let sum=0;
//      for(let i in args){
//           sum+=args[i]
//           console.log(sum)
//      }
// }
// var arr=[10,20,30,40]
// sum("sakshi",...arr)

// // 3.
// var arr1=[10,20,30]
// var arr2=[50,60]
// var arr3=arr1.concat(arr2)
// console.log(arr3)

// // 4.
// var arr1=[10,20,30]
// var arr2=[50,60]
// var arr3=[5,...arr2,...arr1,65]
// console.log(arr3)

// 5. concadinate
let ar1=[2,3,4,5]
let ar2=[6,4,7,8,9]
// ar1=ar1.concat(ar2)
ar1=[...ar1,...ar2]
console.log(ar1)
