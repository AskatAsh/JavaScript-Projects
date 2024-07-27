const cards = document.querySelectorAll('.card-container');

function removeActiveCards(){
    cards.forEach(card => {
        card.classList.remove('active-card');
    })
}
cards.forEach(card => {
    card.addEventListener('click', function(){
        removeActiveCards();
        card.classList.add('active-card');
    })
})