const Todo=[{title:"go",done:true},
{title:"finish",done:true},
{title:"scrum",done:true},
{title:"code review@4",done:true},]

// CREATE
const addTodo=(todo,done)=>{
     Todo.push({title:todo,done:done})
     console.log("TO DO ADDED SUCCESSFULLY")
}
addTodo('Hit the GYM',false)
console.log(Todo)

// READ
const displayTodo=()=>{
     Todo.forEach((item,index)=>{
          return console.log(`${index+1}. Todo: ${item.title} Done: ${item.done}`)
     })
}
displayTodo()

// update
const updateTodo=(newtodo,oldtodo)=>{
     
}