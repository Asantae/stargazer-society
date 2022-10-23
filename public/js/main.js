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
    POD.src = `${data.url}`;
    title.innerHTML = data.title;
    body.innerHTML = data.explanation;
    if (data.copyright){
        author.innerHTML = 'by ' + data.copyright
    }
    
}

let searchItem = document.querySelector("#search-query")

searchItem.addEventListener('input', () => {
    console.log(searchItem.value)
})

//gets metadata about searched items
async function getQuery(searchItem){
    let response = await fetch(`https://images-api.nasa.gov/search?q=${searchItem}`);
    let data = await response.json();
    console.log(data);

}

window.onload = getPic()