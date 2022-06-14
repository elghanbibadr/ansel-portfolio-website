// nav-fixed
const nav=document.querySelector('.nav-links');
 const header=document.querySelector('header');
 const body=document.body;


const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
    if (!entry.isIntersecting){
        if (body.classList.contains('body-light')){
         addSticky()            
         nav.classList.add('nav-sticky-light');
        }
        else 
        addSticky();

        
    }
   
   else {
       if (body.classList.contains('body-light')){
         nav.classList.remove('nav-sticky-light');
        removeSticky();
}
  else   
   removeSticky();
 }
  
})
},{
 threshold:0.5,
 rootMargin:"200px"
})

observer.observe(header)


function removeSticky(){
    nav.classList.remove('nav-sticky')
}

function addSticky(){
    nav.classList.add('nav-sticky')
}