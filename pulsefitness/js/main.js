
(function(){
  document.addEventListener('click', burgerInit)
  function burgerInit(e){
    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav__link')
    if(!burgerIcon && !burgerNavLink) return
    if(document.documentElement.clientWidth > 1200) return
    if(!document.body.classList.contains('body--opened-menu')){
      document.body.classList.add('body--opened-menu')
    } else{
      document.body.classList.remove('body--opened-menu')
    }
  }
  const btnOpen = document.querySelector('.about__img-button')



  const tabControls = document.querySelector('.tab-controls')
  tabControls.addEventListener('click', toggleTab)

  function toggleTab(e){
    const tabControl = e.target.closest('.tab-controls__link') // проверка есть ли у target родитель с классом .tab-controls__link и записывает в переменную если есть 

    if(!tabControl) return
    e.preventDefault() // прописывать если никуда перекидывать не надо, на другие страницы
    if(tabControl.classList.contains('tab-controls__link--active')) return

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab-controls__link--active')
    const activeContent = document.querySelector('.tab-content--show')

    if(activeControl){
      activeControl.classList.remove('tab-controls__link--active')
    }
    if(activeContent){
      activeContent.classList.remove('tab-content--show')
    }
    
    tabContent.classList.add('tab-content--show')
    tabControl.classList.add('tab-controls__link--active')

  }


var swiper = new Swiper(".better__slider", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  speed: 600,
});
})()



