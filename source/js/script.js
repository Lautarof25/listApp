const item = document.querySelector("#item")
const list = document.querySelector("#list")

item.addEventListener("keyup", addItemKeyboard)

let arrayItems = []
let index = 0

function addItemKeyboard(e) {
  let itemValue = normalizeItemValue(item.value)
  if (e.key === 'Enter' && arrayItems.includes(itemValue)) {
    createMessageRepeatItem()
    removeMessageRepeatItem()
  }
  if (e.key === 'Enter' && !arrayItems.includes(itemValue)) {
    index++
    createItem(itemValue, index)
    arrayItems.push(itemValue)
    item.value = ""
  }
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
  div.setAttribute("class", "flex justify-between")
  div.setAttribute("id", `div${id}`)
  button.setAttribute("class", "bg-red-500 hover:bg-red-700 text-white font-bold p-2 rounded-full")
  button.setAttribute("id", `button${id}`)
  input.setAttribute("id", `checkbox${id}`)
  div.appendChild(input)
  div.appendChild(li)
  div.appendChild(button)
  li.appendChild(text)
  list.appendChild(div)
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

function removeMessageRepeatItem() {
  setTimeout(() => {
    const warningDiv = document.querySelector('#warningDiv')
    warningDiv.setAttribute("class", "")
    warningDiv.textContent = ""
    item.value = ""
  }, 3000);
}