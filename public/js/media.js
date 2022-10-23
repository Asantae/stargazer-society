
let searchItem = document.querySelector("#search-query");
let main = document.querySelector("#main");
let imgDiv = document.querySelector("#query-images-container")
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
    for(let i = 0; i < arr.length; i++){
        if(arr[i].data[0].media_type === 'video'){
            console.log(arr[i]);
            let imgElement = document.createElement('video');
            let videoSource = document.createElement('source');
            let imageSource = document.createElement('source');
            imgElement.appendChild(videoSource)
            imgElement.appendChild(imageSource)
            imgElement.classList.add('query-box');
            imgElement.classList.add('query-images');
            
            //const elementChildSpan = document.createElement('span')
            //elementChildSpan.classList.add('query-title')
            //element.appendChild(elementChildSpan)
            imageSource.src = arr[i].links[0].href;
            videoSource.src = arr[i].links[1].href;
            imgDiv.appendChild(imgElement);
        } else {
           let imgElement = document.createElement('img'); 
           imgElement.classList.add('query-box');
           imgElement.classList.add('query-images');
           
           //const elementChildSpan = document.createElement('span')
           //elementChildSpan.classList.add('query-title')
           //element.appendChild(elementChildSpan)
           imgElement.src = arr[i].links[0].href;
           imgDiv.appendChild(imgElement);
        }
    }

}

function deleteElement(){
    let query = document.querySelectorAll(".query-images");
    for(let i = 0; i < query.length; i++){
        imgDiv.removeChild(query[i]);
    }
}
