import './nav.js';
import './modal.js';
import './filterCard.js';

let slides=document.querySelectorAll('.slider-cards');

slides.forEach((slide,i)=>{
    slide.style.transform=`translateX(${i * 110}%)`
})