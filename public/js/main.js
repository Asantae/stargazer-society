//controls navigation menu
const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visisbility = nav.getAttribute("data-visible");

    if (visisbility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true)
    } else {
        nav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false)
    }
})

//gets picture and description for "picture of the day" (APOD)
async function getPic(){
    let POD = document.querySelector(".APOD")
    let title = document.querySelector(".apititle")
    let body = document.querySelector(".apibody")
    let author = document.querySelector(".apiauthor")
    let key = await fetch('/api', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => res.json())
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`);
    let data = await response.json();
    console.log(data);
    POD.src = `${data.url}`;
    title.innerHTML = data.title;
    body.innerHTML = data.explanation;
    if (data.copyright){
        author.innerHTML = 'by ' + data.copyright
    }
    
}

//controls destination page and what content is shown
const mainContentArray = document.querySelectorAll("#main");
const moonButton = document.querySelectorAll(".moon-button");
const marsButton = document.querySelectorAll(".mars-button");
const europaButton = document.querySelectorAll(".europa-button");
const titanButton = document.querySelectorAll(".titan-button");

moonButton.forEach(x => x.addEventListener('click', () => {
    mainContentArray[0].style = 'display: auto;'
    mainContentArray[1].style = 'display: none;'
    mainContentArray[2].style = 'display: none;'
    mainContentArray[3].style = 'display: none;'
}))

for(let i = 0; i < 0; i++){
    marsButton[i].addEventListener('click', () => {
        mainContentArray[0].style = 'display: none;'
        mainContentArray[1].style = 'display: auto;'
        mainContentArray[2].style = 'display: none;'
        mainContentArray[3].style = 'display: none;'
    })
}

europaButton.forEach(x => x.addEventListener('click', () => {
    mainContentArray[0].style = 'display: none;'
    mainContentArray[1].style = 'display: none;'
    mainContentArray[2].style = 'display: auto;'
    mainContentArray[3].style = 'display: none;'
}))

titanButton.forEach(x => x.addEventListener('click', () => {
    mainContentArray[0].style = 'display: none;'
    mainContentArray[1].style = 'display: none;'
    mainContentArray[2].style = 'display: none;'
    mainContentArray[3].style = 'display: auto;'
}))


for(let i = 1; i < mainContentArray.length; i++){
    mainContentArray[i].style = 'display: none;'
}

window.onload = getPic()