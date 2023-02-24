function Introvertido_E_Extrovertido(){
    document.getElementById('m1').style.left='calc(14% - 1.9em)'
}
function AnalíticoECriativo(){
    document.getElementById('m2').style.left='calc(40% - 1.9em)'
}
function JS_E_HTML(){
    document.getElementById('m3').style.left='calc(95% - 1.9em)'
}
function Bagunçado_E_Organizado(){
    document.getElementById('m4').style.left='calc(15% - 1.9em)'
}
function Individual_E_TrabalhoemEquipe(){
    document.getElementById('m5').style.left='calc(53% - 1.9em)'
}
function SoftSkills_E_HardSkills(){
    document.getElementById('m6').style.left='calc(60% - 1.9em)'
}
function Conservador_E_Tomador_de_Risco(){
    document.getElementById('m7').style.left='calc(30% - 1.9em)'
}
Introvertido_E_Extrovertido()
AnalíticoECriativo()
JS_E_HTML()
Bagunçado_E_Organizado()
Individual_E_TrabalhoemEquipe()
SoftSkills_E_HardSkills()
Conservador_E_Tomador_de_Risco()

const descriptionText = document.getElementById('descriptionText')
const editButton = document.getElementById('edit')

function descriptionSave() {
    let edit = prompt("Informe uma nova descrição:")
    localStorage.setItem("description", edit)
    descriptionSet()
}

function descriptionSet() {
    let text = localStorage.getItem("description")
    if (text === null) {
        descriptionText.innerHTML = ""
    } else {
        descriptionText.innerHTML = text
    }
}

descriptionSet()

editButton.addEventListener('click', descriptionSave)