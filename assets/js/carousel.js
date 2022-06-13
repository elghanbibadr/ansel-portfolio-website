 let slides=document.querySelectorAll('.slider-cards');
 let dots=document.querySelectorAll('.dots');
 let body=document.body;
 dots.forEach((dot,index)=>dot.addEventListener('click',()=>UpdateTestimonial(index,dot)))


 function UpdateStatus(dot,isRemove,className){
   isRemove ? dot.classList.remove(`${className}`):
   dot.classList.add(`${className}`);
 }


 function UpdateTestimonial(index,dot){
     const current=slides[index];
     // show the current slide
     slides.forEach(slide=>UpdateStatus(slide,true,'slider-active'))
   UpdateStatus(current,false,'slider-active')
 //   change btns background color
      dots.forEach(dot=>{
        if (body.classList.contains('body-light')){
          // dots.forEach(dot=>dot.classList.remove('dots-active'))
          UpdateStatus(dot,true,'dots-light')
        }
         
        else  {
          UpdateStatus(dot,true,'dots-active')
          // dots.forEach(dot=>dot.classList.remove('dots-light'))
        }
        
      })
      if (body.classList.contains('body-light'))
      UpdateStatus(dot,false,'dots-light')

      else   UpdateStatus(dot,false,'dots-active')
 }