string=require("readline-sync")
string1=string.question("enter the num")
if(string1.includes("ing")){
     s=string1.replace("ing","ly")
     console.log(s)
}
else if(string1.includes("ly")){
     console.log( string1.replace("ly","ing"))
}
else{
     string+="ingly"
}

string=require("readline-sync")
string1=string.question("enter the num")
if(string1.endsWith("ing")){
     s=string1.replace("ing","ly")
     console.log(s)
}
else if(string1.endsWith("ly")){
     console.log( string1.replace("ly","ing"))
}
else{
     string1+="ingly"
     console.log(string1)
}