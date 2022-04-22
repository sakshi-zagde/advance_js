string=require("readline-sync")
str1=string.question("enter the month")
switch(str1){
     case ("january"):
          str2=string.questionInt("enter the date")
          switch(str2){
               case(1):
                   console.log("HAPPY MAHASHIVRATRI")
                   break
               case(2):
                   console.log("HAPPY MAKAR SANKRANTI")
                   break
               case(3):
                   console.log("HAPPY CHRISTMAS")
                   break
               case(4):
                   console.log("HAPPY HOLI")
                   break
               default:
                   console.log("Its Normal Day")
                   break 
          }
     case ("february"):
          str3=string.questionInt("enter the date")
          switch(str3){
               case(1):
                   console.log("HAPPY ROSE DAY")
                   break
               case(2):
                   console.log("HAPPY CHOCOLATE DAY")
                   break
               case(3):
                   console.log("HAPPY TEDDY DAY")
                   break
               case(4):
                   console.log("HAPPY PROPOSE DAY")
                   break
               default:
                   console.log("Its Normal Day")
                   break
          }
          case("march"):
          str3=string.questionInt("enter the date")
          switch(str3){
               case(1):
                   console.log("HAPPY HOLI")
                   break
               case(2):
                   console.log("HAPPY NAGPANCHAMI")
                   break
               case(3):
                   console.log("HAPPY NAVRATRI")
                   break
               case(4):
                   console.log("HAPPY DIWALI")
                   break
               default:
                   console.log("Its Normal Day")
                   break
          }

}