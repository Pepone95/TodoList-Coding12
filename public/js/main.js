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
    ul.appendChild(li)
    li.innerText = input1.value
    input1.value = ""

    // Les Li

    li.style.display = 'flex'
    li.style.alignItems = 'center'
    li.style.justifyContent = "space-between"
    li.style.padding = '25px'
    li.style.fontWeight = 'bold'
    li.style.backgroundColor = "lightgray"

    // BTN CHECK

    let div = document.createElement('div')
    li.appendChild(div)

    let btni = document.createElement('i')
    btni.setAttribute("class", "far fa-2x fa-check-circle")
    btni.style.color = 'blue'
    div.appendChild(btni)
    
    
    btni.addEventListener("click", () => {
      if (li.style.backgroundColor == "green"){
        li.style.backgroundColor = "lightgray"
      } else {
        li.style.backgroundColor = "green"
      }
    })
    //  FIN DE BTN CHECK
    

    //  BTN EDIT
    let btne = document.createElement('i')
    btne.setAttribute("class", "fas fa-2x fa-edit")
    btne.style.marginLeft = '50px'
    btne.style.color = 'yellow'
    div.appendChild(btne)

    btne.addEventListener("click", () => {
      btni.remove()
      btnd.remove()
      btne.remove()
      let input2 = document.createElement("input")
      li.appendChild(input2)
      let btns = document.createElement('i')
      btns.setAttribute("class", "fas fa-2x fa-save")
      btns.style.color = "green"
      btns.style.marginRight = "650px"
      li.appendChild(btns)
      // click sur le save => rajoute les 3 bouton de base check,edit,delete
      btns.addEventListener("click", () => {
        li.innerText = input2.value
        li.append(btni, btne, btnd)

        
      })


      
    })

    // FIN BTN EDIT

    
    let btnd = document.createElement('i')
    btnd.setAttribute("class", "far fa-2x fa-trash-alt")
    btnd.style.marginLeft = '50px'
    btnd.style.color = 'red'
    div.appendChild(btnd)
    //  fin des logo boutton

  }
})
