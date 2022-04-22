//  program that shows the delay in execution
function greet() {
     console.log('Hello world');
 }
 function sayName(name) {
     console.log('Hello' + ' ' + name);
 }
 // calling the function
 setTimeout(greet, 2000);
 sayName('John');


 // program to display time every 3 seconds
function showTime() {
    // return new date and time
    let dateTime= new Date();
    // returns the current local time
    let time = dateTime.toLocaleTimeString();
    console.log(time)
   
    // display the time after 3 seconds
     TIME=setTimeout(showTime, 3000);
     clearTimeout(TIME)
}
// calling the function
showTime();

