//hamburger menu functionality
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

const backgroundPic = document.querySelector(".home")
async function getPic(){
    let response = await fetch(`https://api.nasa.gov/planetary/apod?api_key={}`);
    let data = await response.json();
    console.log(data);
    backgroundPic.style.backgroundImage = `url(${data.hdurl})`;
    backgroundPic.style.backgroundRepeat = 'no-repeat';
}
