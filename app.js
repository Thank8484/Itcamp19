function toggleHam(x) {
    x.classList.toggle("change");
    let myMenu = document.getElementById('myMenu')
    if (myMenu.className === 'menu') {
        myMenu.className += ' menu-active'
    } else {
        myMenu.className = 'menu'
    }
}
var slideIndex = 1;
let slides = document.getElementsByClassName("mySlide");
let dots = document.getElementsByClassName("dot");

function currentSlide(n){
    showSlides(n);
}

function showSlides(n) {

    for(let i = 0; i < slides.length;i++){
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

    slides[n-1].style.display = 'block';
    dots[n-1].className += " active";

}
let popup = document.getElementById("popup");
let showModal = document.getElementById("showModal");
let closeModal = document.getElementById("closeModal")
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

showModal.addEventListener('click', () => {
    console.log("Click")
    openPopup()
})

closeModal.addEventListener('click', () => {
    closePopup()
})

showSlides(slideIndex);