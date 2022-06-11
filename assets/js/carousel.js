let slides=document.querySelectorAll('.slider-cards');
let dots=document.querySelectorAll('.dots');

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
     dots.forEach(dot=>UpdateStatus(dot,true,'dots-active'))
     UpdateStatus(dot,false,'dots-active')
}