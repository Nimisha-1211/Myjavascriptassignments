const ulTag=document.getElementById("todocontainer")
const input=document.getElementById("todo_input")
let todosData=JSON.parse(localStorage.getItem("todos"))||[ ]
// {
//   id:1,
//   todo:"Do something nice for someone you care about",
//   completed:false

// },
// {
//   id:2,
//   todo:"Memorize a poem",
//   completed:true

// }
// ]

function rendorTodos(){
  ulTag.innerHTML="";
  todosData.forEach((element,index)=>{
  const liTag=document.createElement("li")
  liTag.innerHTML=`
  <input type="checkbox"${element.completed?" checked":""} onchange="toggleinput(${index})">
  <span class="${element.completed?"text-decoration-line-through":""}">${element.todo}</span>
  <button class="btn btn-warning" onclick="editTodo(${index})">EDIT</button>
  <button class="btn btn-danger" onclick="deleteTodo(${index})">DELETE</button>
  `
  ulTag.appendChild(liTag)
  }
)}
function addTodos(){
  if(input.value.trim()==""){
    return ;
  }
  todosData.push(
    {
      id:Date.now(),
      todo:input.value,
      completed:false
    }

)
addToLocalStorage()
rendorTodos()
input.value=""
console.log(todosData,"todosdata")

}

function addToLocalStorage(){
localStorage.setItem('todos',JSON.stringify(todosData))
}

function deleteTodo(index){
  console.log(index,"in the delete todo")
  todosData.splice(index,1)
  rendorTodos()
  addToLocalStorage()
}

function toggleinput(position){
  console.log(position,"pos")
  todosData[position].completed=!todosData[position].completed
  rendorTodos()
  addToLocalStorage()
  console.log(todosData[position],"clicked todo")
}
function editTodo(position){
  console.log(todosData[position],"edit button clicked")
  const newTodo=prompt("Edit your todo:",todosData[position].todo)
  todosData[position].todo= newTodo
  rendorTodos()
  addToLocalStorage()
}

function handleSaveChanges(){
  
}
rendorTodos()
