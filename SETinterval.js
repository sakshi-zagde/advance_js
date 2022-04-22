// function showtime(){
//      let datetime=new Date()
//      // time=datetime.toLocalTimeString()
//      console.log(datetime)
//      time=setInterval(showtime,3000);
    
//      clearTimeout(time)}
// showtime()
count=0
let sum=setInterval(()=>{
     count+=1
     if (count===5){
         clearTimeout(sum)
     }
     console.log("hello")
},2000)
