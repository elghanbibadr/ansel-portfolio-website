// change link background 

let navLink=document.querySelectorAll('.nav__logo');

navLink.forEach(link=>{
link.addEventListener('click',(e)=>{
    // remove the class from all element
    navLink.forEach(link=>{
        link.classList.remove('active-link')
    })
    // add it to the target element
    e.target.classList.add('active-link');
});
})

