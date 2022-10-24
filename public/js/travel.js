let moonButton = document.querySelector("#moon-button")
let marsButton = document.querySelector("#mars-button")
let europaButton = document.querySelector("#europa-button")
let titanButton = document.querySelector("#titan-button")

marsButton.addEventListener('click', () => {
    window.location.href = 'mars'
})

moonButton.addEventListener('click', () => {
    window.location.href = 'moon'
})

europaButton.addEventListener('click', () => {
    window.location.href = 'europa'
})

titanButton.addEventListener('click', () => {
    window.location.href = 'titan'
})