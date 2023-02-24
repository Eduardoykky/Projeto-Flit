// Tabela de Personalidade

function setMarker1(){
    document.getElementById('m1').style.left='calc(80% - 1.9em)'
}
function setMarker2(){
    document.getElementById('m2').style.left='calc(20% - 1.9em)'
}
function setMarker3(){
    document.getElementById('m3').style.left='calc(50% - 1.9em)'
}
function setMarker4(){
    document.getElementById('m4').style.left='calc(50% - 1.9em)'
}
function setMarker5(){
    document.getElementById('m5').style.left='calc(60% - 1.9em)'
}
function setMarker6(){
    document.getElementById('m6').style.left='calc(40% - 1.9em)'
}
function setMarker7(){
    document.getElementById('m7').style.left='calc(90% - 1.9em)'
}

setMarker1()
setMarker2()
setMarker3()
setMarker4()
setMarker5()
setMarker6()
setMarker7()
// Botão de editar

const descriptionText = document.getElementById('descriptionText')
const editButton = document.getElementById('edit')

function init() {
  if (localStorage.getItem('newText')) {
    descriptionText.textContent = localStorage.getItem('newText')
  }

  editButton.addEventListener('click', handleEditClick)
}

function handleEditClick() {
  const newText = prompt('Insira o novo texto:')
  if (newText !== null) {
    descriptionText.textContent = newText
    localStorage.setItem('newText', newText)
  }
}

init()