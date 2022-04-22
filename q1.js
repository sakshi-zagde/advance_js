// if no is 50 or there sum is 50
// var a=require("readline-sync")
// b=a.questionInt("enter the num")
// c=a.questionInt("enter the num")
// if (((b==50) || (c==50)) || (b+c==50)){
// console.log("true")
// }
// else {
//      console.log(false)
// }

// var obj=[{name:"abd",age:30},
// {name:"ad",age:50},
// {name:"ab",age:60},
// {name:"bd",age:40},]
// let filt=obj.filter(oj=>oj.age>40);
//      console.log(filt)


// var y = 234;
// var z = y;
// y = 23;
// console.log(z)

// var obj = { name: "Vivek", surname: "Bisht" };
// var obj2 = obj;
// obj.name = "Akki"; 
// console.log(obj2);    

// function sayHello() {
//      return function() {
//         console.log("Hello!");
//      }
//   }
//   sayHello()();
//   // Hello!

// var obj = {
//      name:  "vivek",
//      getName: function(){
//      console.log(this.name);
//    }
//  }   
//  obj.getName();

// function doSomething() {
//      console.log(this);
//    }
           
//    doSomething();


// var obj = {
//      name:  "vivek",
//      getName: function(){
//      console.log(this.name);
//    }   
//  }      
//  var getName = obj.getName;
//  console.log(getName)       
//  var obj2 = {name:"akshay", getName };
//  obj2.getName();
//  console.log(obj2)

// s={name:"sakshi",feature:}


// const s=()=>{
//  console.log("asdf")
// }

// var bike = {
//      display: function(registration,brandName){
//      return this.name+ " , "+ "bike : "+ registration + " , " + brandName;
//    }
//  }
//  var person1 = {name:  "Vivek"};
//  var OfPerson1 = bike.display.bind(person1, "TS0122", "Bullet");
//  console.log(OfPerson1())

// function multiply(a,b){
//      return a*b;
//    }
//    function currying(fn){
//      return function(a){
//        return function(b){
//          console.log( fn(a,b))
//        }
//      }
//    }
//    var curriedMultiply = currying(multiply); 
//    multiply(4, 3); // Returns 12
//    curriedMultiply(4)(3)

// function Person(name,age,gender){
//      this.name = name;
//      this.age = age;
//      this.gender = gender;
//    }
   
   
//    var person1 = new Person("Vivek", 76, "male");
//    console.log(person1);
   
//    var person2 = new Person("Courtney", 34, "female");
//    console.log(person2);

//    function addAllArgs(...args){
//      let sumOfArgs = 0;
//      let i = 0;
//      while(i < args.length){
//        sumOfArgs += args[i];
//        i++;
//      }
//      return sumOfArgs;
//    }
// console.log(addAllArgs(6, 5, 7, 99)) // Returns 117
//    addAllArgs(1, 3, 4);

// var y = 24;
// function favFunction(){
//   var x = 667;
//   var anotherFavFunction = function(){
//     console.log(x); // Does not find x inside anotherFavFunction, so looks for variable inside favFunction, outputs 667
//   }
//   var yetAnotherFavFunction = function(){
//     console.log(y); // Does not find y inside yetAnotherFavFunction, so looks for variable inside favFunction and does not find it, so looks for variable in global scope, finds it and outputs 24
//   }
//   anotherFavFunction();
//   yetAnotherFavFunction();
// }
// favFunction();

// d=[2,3,4,5]
// s=[5,6,7,9]
// a=d+s
// console.log(a)
