let body = document.querySelector("body")
let input1 = document.getElementsByClassName("form-control")[0]

// Boutton ajouter

let Ajouter = document.getElementsByClassName("btn")[0]
Ajouter.style.backgroundColor = 'turquoise'
Ajouter.style.marginRight = '200px'

// 4 boutton

let buttonTodo = document.getElementsByClassName("btn")[1]

let buttonDone = document.getElementsByClassName("btn")[2]

let supprimer = document.getElementsByClassName("btn")[3]
let buttonAll = document.getElementsByClassName("btn")[4]

let boxBody = document.getElementsByClassName("box-body")[0]

let ul = document.getElementById("list all")
boxBody.appendChild(ul)

Ajouter.addEventListener("click", () => {
  if(input1.value !== ""){
    let li = document.createElement("li")
    li.innerText = input1.value
    input1.value = ""
    ul.appendChild(li)

    // Les Li

    li.style.display = 'flex'
    li.style.alignItems = 'center'
    li.style.justifyContent = "space-between"
    li.style.padding = '25px'
    li.style.fontWeight = 'bold'
    li.style.backgroundColor = "lightgray"

    // les logo boutton

    let div = document.createElement('div')
    li.appendChild(div)

    let btni = document.createElement('i')
    btni.setAttribute("class", "far fa-2x fa-check-circle")
    btni.style.color = 'blue'
    div.appendChild(btni)

    let btne = document.createElement('i')
    btne.setAttribute("class", "fas fa-2x fa-edit")
    btne.style.marginLeft = '50px'
    btne.style.color = 'yellow'
    div.appendChild(btne)
    
    let btns = document.createElement('i')
    btns.setAttribute("class", "far fa-2x fa-trash-alt")
    btns.style.marginLeft = '50px'
    btns.style.color = 'red'
    div.appendChild(btns)
    //  fin des logo boutton
    
  }
})
