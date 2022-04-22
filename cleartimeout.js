// program to stop the setTimeout() method
let count = 0;
// function creation

let id = setTimeout(function increaseCount(){
    // increasing the count by 1
    count += 1;
    console.log(count)
}, 3000);
// clearTimeout
clearTimeout(id); 
console.log('setTimeout is stopped.');