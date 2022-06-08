const workBtns=document.querySelectorAll('.work__btn');
const workCards=document.querySelectorAll('.work__card');

workBtns.forEach(btn=>btn.addEventListener('click',(e)=>{
    // change the background color of the current active btn
     workBtns.forEach(element=>btnRemoveBg(element))
        e.target.classList.add('work__btn--active');

        // filter the cards according to the id of the clicked btn
        let currentAttribute=btn.getAttribute('data-type');
        workCards.forEach(card=>{
             if (btn.id==='All'){
                 return showCards(card)
             }
             else {
                 hideCards(card)
                if (card.id===currentAttribute){
                    showCards(card);
                }
            }
        })

}))

function showCards(card){
    card.classList.remove('hide-card');
}
function hideCards(card){
    card.classList.add('hide-card');
}

function btnRemoveBg(entry){
   entry.classList.remove('work__btn--active');
}