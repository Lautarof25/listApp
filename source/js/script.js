const item = document.querySelector("#item")
const list = document.querySelector("#list")

item.addEventListener("keyup", addItemKeyboard)

let arrayItems = []
let arrayLength = arrayItems.length

function addItemKeyboard(e) {
  arrayLength = arrayItems.length
  let itemValue = normalizeItemValue(item.value)
  if (e.key === 'Enter' && arrayItems.includes(itemValue)) {
    createMessageRepeatItem()
    removeMessageRepeatItem()
  }
  if (e.key === 'Enter' && !arrayItems.includes(itemValue)) {
    createItem(itemValue, arrayLength)
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
  li.setAttribute("id", `li${id}`)
  div.appendChild(input)
  div.appendChild(li)
  div.appendChild(button)
  li.appendChild(text)
  list.appendChild(div)
}

function removeItem(e) {
  let buttonId = `${e.target.id}`
  let arrayItem = document.getElementById(buttonId).previousElementSibling.textContent
  if (buttonId.includes("button")) {
    arrayItems = arrayItems.filter(item => item !== arrayItem)
      buttonId = buttonId.at(-1)
      document.querySelector(`#div${buttonId}`).remove()
  }
}

list.addEventListener("click", removeItem)

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