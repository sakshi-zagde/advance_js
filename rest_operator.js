// 1.
// function sum(name,...arg){
// let sum=0
// for (i in arg){
//     sum= sum+arg[i]
// }
// console.log(name)
// console.log(sum)
// }
// sum("sakshi",30,40,20)

// 2.
function total(...inputs){
    console.log(...inputs)
    sum=0
    for (i of inputs){
        sum+=i
    }
    console.log(sum)
}
a=[12,3,4,5,6,7,8]
total(...a)