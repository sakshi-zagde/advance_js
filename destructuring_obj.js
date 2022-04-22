1.
var obj={name:"sakshi",age:25,city:"delhi"}
var{name,age}=obj
console.log(name)
console.log(age)

// 2.
let user={num:30,sum:40,group:"A"}
let {num:a,sum:b,group:d}=user
console.log(a,d,b)

// 3.
let story={"name":"sakshi", age:25, sub:{fav:"biology",fav1:"maths"}}
let {name,age,sub}=story
console.log(`My name is ${name}, my age is ${age}, My favourite subject is
${sub.fav1}`)

// 4. (RENAME)
var obj={name:"sakshi",age:25,city:"delhi"}
var{name:name1,age:age1}=obj
console.log(` my name is ${name1}`)
