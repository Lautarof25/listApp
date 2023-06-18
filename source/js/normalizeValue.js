function removeAccents(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
} 

function normalizeItemValue(itemValue){
  let normalize = removeAccents(itemValue.toLowerCase().trim())
  return normalize
}