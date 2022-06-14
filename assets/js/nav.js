// change link background 

let navLink=document.querySelectorAll('.nav__logo');

navLink.forEach(link=>{
link.addEventListener('click',(e)=>{
    // remove the class from all element
    navLink.forEach(link=> UpdateLinkBg(link,true));
    // add it to the target element
    UpdateLinkBg(e.target);
});
})



function UpdateLinkBg(element,isRemove){
   isRemove ? element.classList.remove('active-link'):
   element.classList.add('active-link')
}



