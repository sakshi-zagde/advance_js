function show(){
     var j=10
     console.log(j)
     function inner(){
          var k=20
          console.log(j)
          console.log(k)
     }
     inner()
     // console.log(k)
}
show()


// 2.
function x(){
     var a=10
     function y(){
          console.log(a)
     }
return a
}
var z=x()
console.log(z)


function jump() {
     var height = 10;
     function scream() {
       console.log(height);
     }
     return scream;
   }
   var newJump = jump(); 
   newJump(); // logs 10