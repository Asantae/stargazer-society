
let background = document.querySelector(".destination")
let searchItem = document.querySelector("#search-query");
let main = document.querySelector("#main");
let imgDiv = document.querySelector("#query-images-container")

let header = document.querySelector(".primary-header")


searchItem.addEventListener('input', () => {
    getQuery(searchItem.value);
})

//gets metadata about searched items
async function getQuery(searchItem){
    if(searchItem != ''){
        let response = await fetch(`https://images-api.nasa.gov/search?q=${searchItem}`);
        let data = await response.json();
        createElement(data.collection.items);
    }

}

function createElement(arr){
    deleteElement();
    background.style.backgroundSize = 'auto'
    for(let i = 0; i < arr.length; i++){
        let imgElement = document.createElement('img');
        imgElement.classList.add('query-images');
        imgElement.alt = arr[i].data[0].title
        //const elementChildSpan = document.createElement('span')
        //elementChildSpan.classList.add('query-title')
        //element.appendChild(elementChildSpan)
        imgElement.src = arr[i].links[0].href;
        imgElement.style.marginTop = '10px'
        imgDiv.appendChild(imgElement);
    }

}

function deleteElement(){
    let query = document.querySelectorAll(".query-images");
    for(let i = 0; i < query.length; i++){
        imgDiv.removeChild(query[i]);
    }
}
