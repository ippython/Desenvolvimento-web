document.body.addEventListener("keydown", (event) =>{
    console.log(event.code.toLowerCase())
    playSound(event.code.toLowerCase())
})

function playSound(sound){
    let audioElemento = document.getElementById(`s_${sound}`)
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    //Se elemento existir ele da play na musica
    if (audioElemento) {
        
        audioElemento.currentTime=0
        audioElemento.play()
    }

    if (keyElement) {

        keyElement.classList.add("active")
        
        setTimeout(()=>{
            keyElement.classList.remove("active")
        }, 200)
    }
}


function tocar(){
    let music = document.getElementById("input").value
    
    if (music != "") {
        let musicArray = music.split("");

        playMusic(musicArray);

    }


    
}

function playMusic(musicA){

    let espera = 0;
    musicA.forEach((nota)=>{
        setTimeout(()=>{
            playSound(`key${nota}`)
        }, espera)
        espera += 250;
    })
}