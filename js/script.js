const showModalBtn = document.querySelector('.body__showModalBtn');

const modalClose = document.querySelector('#closeModal');

const modalContainer = document.querySelector('.body__modalContainer');

const modal = document.querySelector('.modalContainer__modal');

const modalOkeyButton = document.querySelector('.modal__footerButton--green');

const modalCancelButton = document.querySelector('.modal__footerButton--red');

showModalBtn.addEventListener("click", ()=>{
    modalContainer.classList.add('body__modalContainer--active','fadeOut');
    modalContainer.focus();
})



modalClose.addEventListener("click", ()=>{
    modalContainer.classList.remove('body__modalContainer--active');
})

modalOkeyButton.addEventListener("click", ()=>{
    modalContainer.classList.remove('body__modalContainer--active');
})

modalCancelButton.addEventListener("click", ()=>{
    modalContainer.classList.remove('body__modalContainer--active');
})

modalContainer.addEventListener("click", ()=>{
    modalContainer.classList.remove('body__modalContainer--active');
  

})
