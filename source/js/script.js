const itemInput = document.querySelector("#itemInput")
const list = document.querySelector("#list")
const buttonAdd = document.querySelector("#buttonAdd")

buttonAdd.addEventListener("click", addItemButton)

let arrayItems = []
let index = 0

function addItemButton() {
  let itemValue = normalizeItemValue(itemInput.value)

  if(itemValue === ""){
    emptyMessage()
    removeMessage()
    itemInput.focus()
  }else {
    if (arrayItems.includes(itemValue) &&  itemValue !== "") {
      createMessageRepeatItem()
      removeMessage()
      itemInput.focus()
    }
    if (!arrayItems.includes(itemValue) &&  itemValue !== "") {
      index++
      createItem(itemValue, index)
      arrayItems.push(itemValue)
      itemInput.value = ""
      itemInput.focus()
    }
  }
  
}

function emptyMessage(){
  const warningDiv = document.querySelector('#warningDiv')
  const p = document.createElement('p')
  const text = document.createTextNode('Por favor ingrese un item')
  warningDiv.setAttribute("class", "linset-y-2.5 top-0 absolute animate-bounce bg-red-500 rounded-full text-white p-2")
  warningDiv.appendChild(p)
  p.appendChild(text)
}

function createItem(itemValue, id) {
  const div = document.createElement('div')
  const li = document.createElement('li')
  const button = document.createElement('button')
  const input = document.createElement('input')
  const text = document.createTextNode(itemValue)
  const textbutton = document.createTextNode("X")
  input.setAttribute("type", "checkbox")
  button.appendChild(textbutton)
  div.setAttribute("class", "flex justify-between items-center mb-1")
  div.setAttribute("id", `div${id}`)
  button.setAttribute("class", "bg-red-500 hover:bg-red-700 text-white p-1 rounded")
  li.setAttribute("class", "absolute ml-5")
  li.setAttribute("contenteditable", "true")
  button.setAttribute("id", `button${id}`)
  input.setAttribute("id", `checkbox${id}`)
  li.setAttribute("id", `li${id}`)
  div.appendChild(input)
  div.appendChild(li)
  div.appendChild(button)
  li.appendChild(text)
  list.appendChild(div)

 
}
// Falta terminar
function editItem(liId){
  let tempContent = li.textContent
  li.addEventListener("focusout", function(){
    
    if(li.textContent === ''){
      li.textContent = tempContent
      itemInput.focus()
    }else {
      arrayItems = arrayItems.filter(item => item !== tempContent)
      tempContent = normalizeItemValue(li.textContent)
      arrayItems.push(tempContent)
    }
  })
}

function itemCompleted(e){
  let checkboxID = `${e.target.id}`
  const nextElementChk = document.getElementById(checkboxID)
  if (checkboxID.includes("checkbox") && e.target.checked) {
    nextElementChk.nextElementSibling.classList.add('line-through')
  }else {
    nextElementChk.nextElementSibling.classList.remove('line-through')
  }
}

function removeItem(e) {
  let buttonId = `${e.target.id}`
  if (buttonId.includes("button")) {
    let arrayItem = document.getElementById(buttonId).previousElementSibling.textContent
    arrayItems = arrayItems.filter(item => item !== arrayItem)
      buttonId = buttonId.at(-1)
      document.querySelector(`#div${buttonId}`).remove()
  }
}

list.addEventListener("click", removeItem)
list.addEventListener("change", itemCompleted)

function createMessageRepeatItem() {
  const warningDiv = document.querySelector('#warningDiv')
  const p = document.createElement('p')
  const text = document.createTextNode('Ya ingresó ese item')
  warningDiv.setAttribute("class", "linset-y-2.5 top-0 absolute animate-bounce bg-red-500 rounded-full text-white p-2")
  warningDiv.appendChild(p)
  p.appendChild(text)
}

function removeMessage() {
  setTimeout(() => {
    const warningDiv = document.querySelector('#warningDiv')
    warningDiv.setAttribute("class", "")
    warningDiv.textContent = ""
    itemInput.value = ""
  }, 3000);
}