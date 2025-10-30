// const body = document.querySelector('.body')
// const menuBtn = document.querySelector('.burger-icon')

// menuBtn.addEventListener('click', (e) =>{
//   body.classList.toggle('body--opened-menu')
// })

(function(){
  document.addEventListener('click', burgerInit)
  function burgerInit(e){
    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')
    console.log('burgerIcon')
    if(!burgerIcon && !burgerNavLink) return
    if(document.documentElement.clientWidth > 900) return
    if(!document.body.classList.contains('body--opened-menu')){
      document.body.classList.add('body--opened-menu')
    } else{
      document.body.classList.remove('body--opened-menu')
    }
  }
  const btnOpen = document.querySelector('.about__img-button')



  const body = document.querySelector('.body')

  const openModal = (e) =>{
    e.preventDefault()
    body.classList.add('body--opened-modal')
  }
  const closeModal = (e) =>{
    body.classList.remove('body--opened-modal')
  }
  btnOpen.addEventListener('click', openModal)
  body.addEventListener('click', event =>{
    const target = event.target
    event.preventDefault()
    if (target && target.closest('.modal__cancel') || target.classList.contains('modal')){
      closeModal()
    }
  })

  document.addEventListener('keydown', event =>{
    if(event.code === 'Escape' && body.classList.contains('body--opened-modal')){
      closeModal()
    }
  })

})()



