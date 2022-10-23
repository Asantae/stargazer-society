
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

window.onload = getPic()