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
inputItem.addEventListener("keyup",addItemKeyboard)
button.addEventListener("click",addItemButton)
// Template list


function addItemKeyboard(e){
  let item = e.target.value.trim().toLowerCase()
  if (e.key == 'Enter' && item != "" && !arrayItems.includes(item)){
      arrayLength = arrayItems.length
      arrayItems.push(item)
      list.innerHTML +=
      `
      <div class="flex justify-between items-center	">
        
        <ul class="flex items-center justify-between gap-2"><input id="item${arrayLength}" type="checkbox" value="" class="w-4 h-4">  ${item} </ul>
        <button>X</button>
      </div>
      `
      arrayItems.push(inputItem.value)
      inputItem.value = ""
    }
    if(arrayItems.includes(item)){
      warningDiv.ìnnerHTML = `<p>"El item ya está en la lista"</p>`
    }
}

function addItemButton(){
  let item = inputItem.value.trim().toLowerCase()
  if(item != "" && !arrayItems.includes(item)){
    arrayLength = arrayItems.length
    arrayItems.push(item)
    list.innerHTML +=
      `
      <div class="flex justify-between items-center	">
        
        <ul class="flex justify-between items-center gap-2"><input id="item${arrayLength}" type="checkbox" value="" class="w-4 h-4"> ${item} </ul>
        <button>X</button>
      </div>
      `
  inputItem.value = ""
  inputItem.focus()
  }
}


















