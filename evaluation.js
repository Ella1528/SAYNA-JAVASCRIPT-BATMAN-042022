// Faire le fade in pour les titres //
let fade = document.querySelectorAll("h3")

console.log(fade);

for (let i = 0; i < fade.length; i++) {
    fade[i].classList.add("changement")
    
}

//faire le fade in de la premiere partie les textes avec les boutons

let fade1 = document.getElementById("anime")

console.log(fade1);
fade1.classList.add("changement1")

//scroll de l`image qui se place dans la classe division2
const solution = document.getElementsByClassName("division2")[0]
let my = [0,]


// window.addEventListener('scroll' , () =>{

//     mypush(window.scrollY)
//     console.log(my);
// })

//Ici on va faire l`animation des boutons poour activer les slides 
let imageSlide2 = [
    {
        source : '../Evaluation final/Assets/Illustrations/Home/Bathome8.png',
        titre: `ACTION ADVENTURE`
    },
    {
        source : '../Evaluation final/Assets/Illustrations/Home/Bathome10_slide_ba.png',
        titre: `DEUXIEME ACTION`
    },
    {
        source : '../../Evaluation final/Assets/Illustrations/Home/Bathome11_slide_ba.png',
        titre: 'DEUXIEME ACTION'
    }
]

let news1 = document.getElementById("deux2")
let challenge = document.getElementById("fiovana")
let plus = 0
let nextImage = document.getElementById("nextImage")
nextImage.addEventListener('click', () => {
    plus = plus + 1
    if (plus >= imageSlide2.length-1) {
        plus = 0
    }
    news1.src = imageSlide2[plus].source
    challenge.textContent = imageSlide2[plus].titre
})


const formulaire = document.getElementById('formulaire')
const confirmer = document.getElementById('confirmer')


confirmer.addEventListener('click', () => {
    formulaire.innerHTML=`<div class="recu text-center">
                                <h1>Message recu</h1>
                          </div>`
})