// the modal window

const modalLinks=document.querySelectorAll('.card-link')
const modalOverlay=document.querySelector('.services__modal');
const modalCloseIcon=document.querySelector('.modal__logo');

// event listeners
modalLinks.forEach(link=>link.addEventListener('click',showModal))

modalCloseIcon.addEventListener('click',closeModal);
 function showModal(){
     document.body.style.overflowY='hidden'
     modalOverlay.classList.add('overlay-active');
 }
 function closeModal(){
     document.body.style.overflowY='visible'
  modalOverlay.classList.remove('overlay-active');
 }



// close the modal when pressing the enter key
document.addEventListener('keydown',(e)=>{
   if (e.key==='Enter' &&  modalOverlay.classList.contains('overlay-active')){
      closeModal();
   }
})

