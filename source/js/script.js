// Qué elementos intervienen?
const warningDiv = document.querySelector("#warningDiv")

// Array

let arrayItems = []
let arrayLength = arrayItems.length


// Input text
const inputItem = document.querySelector("#item")
// inputItem.value
// Button
const button = document.querySelector("#addItem")
// list
const list = document.querySelector("#list")

// Agrego evento
inputItem.addEventListener("keyup", addItemKeyboard)
button.addEventListener("click", addItemButton)


function addItemKeyboard(e) {
  let item = removeAccents(inputItem.value.trim().toLowerCase())
  if (e.key === 'Enter' && arrayItems.includes(item)) {
    warningMessage()
  }
  if (e.key === 'Enter' && item != "" && !arrayItems.includes(item)) {
    addUl(item)
  }

}

function addItemButton() {
  let item = removeAccents(inputItem.value.trim().toLowerCase())
  if (arrayItems.includes(item)) {
    warningMessage()
  }
  if (item !== "" && !arrayItems.includes(item)) {
    addUl(item)
  }

}

function warningMessage(){
  warningDiv.innerHTML = `<p class="bg-red-500 text-center text-white w-fit p-2 rounded-md text-xl	">Ya está en la lista</p>`
  setTimeout(() => {
    warningDiv.innerHTML = ""
    inputItem.value = ""
    inputItem.focus()
  }, 3000);
}

function addUl(item) {
  arrayLength = arrayItems.length
  list.innerHTML +=
    `
  <div class="flex justify-between items-center	">
  
  <ul class="flex justify-between items-center gap-2"><input id="item${arrayLength}" type="checkbox" value="" class="w-4 h-4"> ${item} </ul>
  <button>X</button>
  </div>
  `
  arrayItems.push(item)
  inputItem.value = ""
  inputItem.focus()
}
