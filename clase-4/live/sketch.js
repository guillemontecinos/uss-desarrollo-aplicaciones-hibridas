let capture

function setup() {
    capture = createCapture(VIDEO, (stream) => {
        createCanvas(capture.width, capture.height)
        capture.hide()
    })
}

function draw(){
    image(capture, 0, 0)
    filter(GRAY)
}