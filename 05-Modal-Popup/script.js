const showModalButton = document.getElementById("show-modal-btn"),
    closeModalButton = document.getElementById("close-modal-btn"),
    backDrop = document.querySelector(".backdrop"),
    modalBox = document.getElementById("modal");

showModalButton.addEventListener('click', ()=> {
    modalBox.classList.remove('display');
    backDrop.classList.remove('display');
})
closeModalButton.addEventListener('click', ()=> {
    modalBox.classList.add('display');
    backDrop.classList.add('display');
})
backDrop.addEventListener('click', ()=> {
    modalBox.classList.add('display');
    backDrop.classList.add('display');
})