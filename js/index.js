
const carousel = document.querySelector("[data-target='carousel']");
const card = carousel.querySelector("[data-target='card']");
const leftButton = document.querySelector("[data-action='slideLeft']");
const rightButton = document.querySelector("[data-action='slideRight']");


const carouselWidth = carousel.offsetWidth;
const cardStyle = card.currentStyle || window.getComputedStyle(card)
const cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);


const cardCount = carousel.querySelectorAll("[data-target='card']").length;


let offset = 0;
const maxX = -((cardCount / 1) * carouselWidth + 
               (cardMarginRight * (cardCount / 1)) - 
               carouselWidth - cardMarginRight);


// Add the click events
leftButton.addEventListener("click", function() {
  if (offset !== 0) {
    offset += carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
    }
})
  
rightButton.addEventListener("click", function() {
  if (offset !== maxX) {
    offset -= carouselWidth + cardMarginRight;
    carousel.style.transform = `translateX(${offset}px)`;
  }
})


// Redirecting to Audio Play page
const redirect=document.getElementById("redirect")
redirect.addEventListener("click",()=>{
    console.log("clicking")
    location.href="./html/audioPlay.html"
})

const redirect2=document.getElementById("redirect2")
redirect2.addEventListener("click",()=>{
    console.log("clicking")
    location.href="./html/audioPlay.html"
})