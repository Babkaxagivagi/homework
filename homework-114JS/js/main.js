const btnOpen = document.querySelector('.btn-open')
const modal = document.querySelector('.modal')

const openModal = () =>{
  modal.classList.add('modal--active')
}
const closeModal = () =>{
  modal.classList.remove('modal--active')
}
btnOpen.addEventListener('click', openModal)

modal.addEventListener('click', event =>{
  const target = event.target
  if (target && target.classList.contains('modal') || target.classList.contains('modal__close-btn')){
    closeModal()
  }
})

document.addEventListener('keydown', event =>{
  if(event.code === 'Escape' && modal.classList.contains('modal--active')){
    closeModal()
  }
})