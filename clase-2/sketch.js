let r = 255, g = 255, b = 255, factor = 0

document.getElementById('cambiar-color').addEventListener('click', clickHandler)

function clickHandler() {
    r = Math.trunc(Math.random() * 255)
    g = Math.trunc(Math.random() * 255)
    b = Math.trunc(Math.random() * 255)
    document.body.style.backgroundColor = 'rgb(' + Math.trunc(r * factor) + ',' + Math.trunc(g * factor) + ',' + Math.trunc(b * factor) + ')'
}

document.addEventListener('mousemove', mouseMoveHandler)

function mouseMoveHandler(e) {
    factor = e.clientX / document.body.clientWidth
    document.body.style.backgroundColor = 'rgb(' + Math.trunc(r * factor) + ',' + Math.trunc(g * factor) + ',' + Math.trunc(b * factor) + ')'
}