let body = document.querySelector("body")
let input1 = document.getElementsByClassName("form-control")[0]

// LE  BOUTTON AJOUTER

let Ajouter = document.getElementsByClassName("btn")[0]
Ajouter.style.backgroundColor = 'turquoise'

// les 4 BUTTONS 

let buttonTodo = document.getElementsByClassName("btn")[1]
​
let buttonDone = document.getElementsByClassName("btn")[2]
​
let supprimer = document.getElementsByClassName("btn")[3]
let buttonAll = document.getElementsByClassName("btn")[4]
​
let boxBody = document.getElementsByClassName("box-body")[0]
​
let ul = document.getElementById("list all")
boxBody.appendChild(ul)
​
Ajouter.addEventListener("click", () => {
  if(input1.value !== ""){
    let li = document.createElement("li")
    li.innerText = input1.value
    input1.value = ""
    ul.appendChild(li)
    // STYLE Li
    li.style.display = 'flex'
    li.style.alignItems = 'center'
    li.style.paddingLeft = '35px'
    li.style.fontWeight = 'bold' 
    li.style.width = "1100px"
    li.style.height = "100px"
    li.style.backgroundColor = "lightgray"
    li.style.borderRadius = "1%"
    
  }
})
