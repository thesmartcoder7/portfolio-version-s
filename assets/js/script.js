let crescent360Link = document.querySelector(".crescent");
let iCreationsLink = document.querySelector(".create");
let iAmBrandLink = document.querySelector(".brand");
let crescentJd = document.querySelector(".Crescent360");
let icreationsJd = document.querySelector(".Icreations");
let iAmbrandJd = document.querySelector(".IamBrand");

crescent360Link.addEventListener("click", () => {
    crescent360Link.classList.add("active-link");
    iCreationsLink.classList.remove("active-link");
    iAmBrandLink.classList.remove("active-link");

    crescentJd.classList.add("active-description");
    icreationsJd.classList.remove("active-description");
    iAmbrandJd.classList.remove("active-description");
});

iCreationsLink.addEventListener("click", () => {
    crescent360Link.classList.remove("active-link");
    iCreationsLink.classList.add("active-link");
    iAmBrandLink.classList.remove("active-link");

    crescentJd.classList.remove("active-description");
    icreationsJd.classList.add("active-description");
    iAmbrandJd.classList.remove("active-description");
});

iAmBrandLink.addEventListener("click", () => {
    crescent360Link.classList.remove("active-link");
    iCreationsLink.classList.remove("active-link");
    iAmBrandLink.classList.add("active-link");

    crescentJd.classList.remove("active-description");
    icreationsJd.classList.remove("active-description");
    iAmbrandJd.classList.add("active-description");
});


const followDiv = document.getElementById('followdiv');
const divWidth = followDiv.offsetWidth;
const divHeight = followDiv.offsetHeight;

// Function to update the div's position based on mouse coordinates
function moveDiv(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const divX = mouseX - divWidth / 2;
    const divY = mouseY - divHeight / 2;

    followDiv.style.left = divX + 'px';
    followDiv.style.top = divY + 'px';

    const scrollX = window.scrollX || window.pageXOffset;
    const scrollY = window.scrollY || window.pageYOffset;

    followDiv.style.left = divX + scrollX + 'px';
    followDiv.style.top = divY + scrollY + 'px';
}

// Attach the event listener to the document to track mouse movement
document.addEventListener('mousemove', moveDiv);