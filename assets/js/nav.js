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


function UpdateLinkBg(link,isRemove){
 isRemove?link.classList.remove('active-link'):
 link.classList.add('active-link');
}

