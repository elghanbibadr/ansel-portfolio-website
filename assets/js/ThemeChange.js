
const nav=document.querySelector('.nav');
const navLogoMoon=document.querySelector('.nav-logo');
const navLogosun=document.querySelector('.nav-sun');
const body=[...document.querySelectorAll('.home-mediaLink'),document.body,...document.querySelectorAll('label')]
const homeImg=document.querySelector('.home-img');
const cards=[document.querySelector('footer'),...document.querySelectorAll('.card'),...document.querySelectorAll('.skill__container')];
const heading=[document.querySelector('h1'),...document.querySelectorAll('h2'),...document.querySelectorAll('h3'),...document.querySelectorAll('h4'),...document.querySelectorAll('p'),...document.querySelectorAll('.work__btn')];
const btns=document.querySelectorAll('.btn')
const btnTransparent=document.querySelector('.btn--transparent');
const stickyNav=document.querySelector('.nav-links');





navLogoMoon.addEventListener('click',()=>{
   addHidden(navLogoMoon);
   removeHidden(navLogosun);
   addTheme(nav,'nav-light');
   addTheme(homeImg,'homeImg-light');  
   addLightgroup(body,'body-light')
   addLightgroup(cards,'card-light');
   addLightgroup(heading,'heading-light');
   addLightgroup(btns,'btns-light');
   addTheme(btnTransparent,'btn--transparent-light');
   StickyNav();
  


})

navLogosun.addEventListener('click',()=>{
    removeHidden(navLogoMoon);
    addHidden(navLogosun);
    removeTheme(nav,'nav-light');
    removeLightgroup(body,'body-light')
    removeTheme(homeImg,'homeImg-light');
    removeLightgroup(cards,'card-light');
    removeLightgroup(heading,'heading-light');
    removeLightgroup(btns,'btns-light');
     removeTheme(stickyNav,'nav-sticky-light');
    removeTheme(btnTransparent,'btn--transparent-light')
})

// toggler nav
function removeHidden(element) {
    element.classList.remove('hidden');
}

function addHidden(element){
    element.classList.add('hidden');
}


//  change element background color
 function addTheme(element,className){
   element.classList.add(`${className}`);
 }

 function removeTheme(element,className){
   element.classList.remove(`${className}`);
 }


function addLightgroup(elements,className){
  elements.forEach(element=>addTheme(element,className))
}

function removeLightgroup(elements,className){
  elements.forEach(element=>removeTheme(element,className))
}

function StickyNav(){
  if (stickyNav.classList.contains('nav-sticky')){
    addTheme(stickyNav,'nav-sticky-light');
  }
 }
