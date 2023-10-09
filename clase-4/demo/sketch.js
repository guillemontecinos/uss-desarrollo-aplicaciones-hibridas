let sound, loaded = false

function setup(){
    document.getElementById('load').addEventListener('click', (e) => {
        sound = loadSound('./campana.mp3', () => {
            loaded = true
            alert('El archivo de sonido se ha cargado exitosamente.')
        })
    })

    document.getElementById('play').addEventListener('click', () => {
        if(loaded) sound.play()
        else alert('El archivo de sonido no ha sido cargado aun.')
    })
}

