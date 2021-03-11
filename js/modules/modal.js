function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);

  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);

    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';

  //   if (modalTimerId) {
  //     clearInterval(modalTimerId);
  // }
}

function modal(triggerSelector, modalSelector, modalTimerId) {

    const modalBtn = document.querySelectorAll(triggerSelector),
    modalWindow = document.querySelector(modalSelector),
    modalClose = document.querySelector('[data-close]');


    

modalBtn.forEach(item => {
  item.addEventListener('click', () => openModal(modalSelector, modalTimerId))
});

modalClose.addEventListener('click', () => {
   closeModal(modalSelector);
});

modalWindow.addEventListener('click', (e) => {
  if(e.target === modalWindow) {
      closeModal(modalSelector);
  }
})

document.addEventListener('keydown', (e) => {
  if (e.code === "Escape" && modalWindow.classList.contains('show')) {
      closeModal(modalSelector);
  }
});


function showModalByScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener('scroll', showModalByScroll);
  }
}

window.addEventListener('scroll', showModalByScroll);
}



export default modal;
export {closeModal};
export {openModal};
