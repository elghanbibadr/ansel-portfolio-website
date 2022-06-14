
const navFixedLinks=document.querySelectorAll('.nav__logo');
const scrollToBottom=document.querySelector('.scroll-icon');
const footer=document.querySelector('footer');

navFixedLinks.forEach(link=>link.addEventListener('click',()=>scrollToTargetSection(link)))
scrollToBottom.addEventListener('click',scrollDown)

function scrollToTargetSection(link){
    let scrollTarget=document.getElementById(`${link.getAttribute('data-scroll')}`);
    scrollTarget.scrollIntoView({behavior:'smooth'})
}


function scrollDown(){
   footer.scrollIntoView({behavior:'smooth'})
}