let youtuber1={
     name:"sakshi",
     content:"commerce"
}

let youtuber2={
     name:"aniket",
     content:"art"
}

let youtuber3={
     name:"achal",
     content:"science"
}
function feature(ratings){
console.log(`my name is ${this.name}, my education is ${this.content}`)
}

var result=feature.bind(youtuber2)
result(5)
