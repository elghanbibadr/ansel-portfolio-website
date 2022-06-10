let slides=document.querySelectorAll('.slider-cards');
let dots=document.querySelectorAll('.dots');

dots.forEach((dot,index)=>{
    dot.addEventListener('click',(e)=>{
        // show the current slide
        slides.forEach(slide=>slide.classList.remove('slider-active'))
      slides[index].classList.add('slider-active');

    //   change btns background color
        dots.forEach(dot=>dot.classList.remove('dots-active'))
        e.target.classList.add('dots-active');
    })
})

