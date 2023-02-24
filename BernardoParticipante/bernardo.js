// Tabela de Personalidade

function setMarker1(){
    document.getElementById('m1').style.left='calc(60% - 1.9em)'
}
function setMarker2(){
    document.getElementById('m2').style.left='calc(40% - 1.9em)'
}
function setMarker3(){
    document.getElementById('m3').style.left='calc(50% - 1.9em)'
}
function setMarker4(){
    document.getElementById('m4').style.left='calc(50% - 1.9em)'
}
function setMarker5(){
    document.getElementById('m5').style.left='calc(50% - 1.9em)'
}
function setMarker6(){
    document.getElementById('m6').style.left='calc(60% - 1.9em)'
}
function setMarker7(){
    document.getElementById('m7').style.left='calc(30% - 1.9em)'
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

if (window.localStorage.length === 0) {
    function changeText(e) {
        descriptionText.textContent = window.localStorage.getItem("NewText")
    }

    function inputNewText(e) {
        e.target.value = prompt("insira o novo texto:")
        window.localStorage.setItem("NewText", e.target.value)
        changeText(e)
    }

    editButton.addEventListener('click', inputNewText)

} else {
    
    descriptionText.textContent = window.localStorage.getItem("NewText")
    function changeText(e) {
        descriptionText.textContent = window.localStorage.getItem("NewText")
    }

    function inputNewText(e) {
        e.target.value = prompt("insira o novo texto:")
        window.localStorage.setItem("NewText", e.target.value)
        changeText(e)
    }

    editButton.addEventListener('click', inputNewText)

}