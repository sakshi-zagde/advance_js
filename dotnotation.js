const person1={firstname:"sarah",lastname:"davis",age:20,job:"doctor"}
console.log(`hi, I am ${person1.firstname} and i work as a ${person1.job}`)

// ADD ITEMS 
person1.hasdegree=true
console.log(person1.hasdegree)

const myvalue="job"
console.log(person1.myvalue)
console.log(person1[myvalue])

// console.log(person1[`first ${myvalue}`],person1["last"+myvalue])

const person2={lastname:"davis","mybooks":["lasava","pizza","tacos"]}
console.log(person2["mybooks"][0])

for (let i=0; i<person2["mybooks"].length;  i++){
     console.log(`my ${i+1} favourite food is ${person2["mybooks"][i]}`)
}