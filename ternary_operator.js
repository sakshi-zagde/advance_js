// // FIND THREE MAXIMUM
// let pro=require("readline-sync")
// let marks = pro.questionInt('Enter your marks :');
// let marks1 = pro.questionInt('Enter your marks1 :');
// let marks2= pro.questionInt('Enter your marks2 :');

// // check the condition
// let result =(marks1>marks && marks1>marks2 )? (marks>marks1 && marks>marks2 ? `${marks}`: `${marks1}` )  :(marks>marks1 && marks>marks2 ? `${marks}` :`${marks2}`) ;
// console.log(`${result} is maximum`);

// program to check if number is positive, negative or zero
// let a = -3;
// let result = (a >= 0) ? (a == 0 ? "zero" : "positive") : "negative";
// console.log(`The number is ${result}.`);



// var obj = { name: "Vivek", surname: "Bisht" };

// var obj2 = obj;

// In the above example, the assign operator, directly passes the location of the variable obj to the variable obj2. In other words, the reference of the variable obj is passed to the variable obj2.

// var obj = #8711;  // obj pointing to address of { name: "Vivek", surname: "Bisht" }

// var obj2 = obj;
        
// var obj2 = #8711; // obj2 pointing to the same address 
        
        
// changing the value of obj1
        
// obj2.name = "Akki";
// console.log(obj);


function doSomething() {
     console.log(this);
   }
           
   doSomething();