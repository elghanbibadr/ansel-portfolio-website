const workBtns=document.querySelectorAll('.work__btn');
const workCards=document.querySelectorAll('.work__card');

workBtns.forEach(btn=>btn.addEventListener('click',()=>{
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
