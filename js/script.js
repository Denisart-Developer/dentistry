/*====================SLIDER-TOP===============*/
const mediaQuery = window.matchMedia('(min-width: 837px)')
function handleTabletChange(e) {
  if (e.matches) {
    const swiper = new Swiper('.swiper-container', {
      // Optional parameters
      direction: 'horizontal',
      //freeMode: true,
      //loop: true,
      //slidesPerGroup: 2,
      slidesPerView: 1,
      //freeModeMomentum: true,
      //loopedSlides: 4,
      spaceBetween: 0,
      //centerSlidesBounds: true,
      observer: true,
      observeParents: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
            
      },
    });
  }
}
mediaQuery.addListener(handleTabletChange)
handleTabletChange(mediaQuery)

/*====================SLIDER-OTZYV===============*/

const swiper = new Swiper('.feedback__swiper', {
  // Optional parameters
  direction: 'horizontal',
  //freeMode: true,
  //loop: true,
  //slidesPerGroup: 1,
  slidesPerView: 1,
  //freeModeMomentum: true,
  //loopedSlides: 4,
  spaceBetween: 10,
  //centerSlidesBounds: true,
  observer: true,
  observeParents: true,
  navigation: {
    nextEl: '.slide-feedback__arrows-r',
    prevEl: '.slide-feedback__arrows-l',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
        
  },
  breakpoints: {
    
    1200:{
      slidesPerView: 3,
      spaceBetween: 40
      
    },
    931:{
      slidesPerView: 2,
      spaceBetween: 40
      
    },
    
  }
});

/*====================NAVIGATION-HEADER===============*/
const burger = document.querySelector('.navigation-header__burger');
const dropmenu = document.querySelector('.navigation-header__dropmenu');
burger.addEventListener("click", function (e) {
  dropmenu.classList.toggle('active');
  burger.classList.toggle('active');
});

/*====================HOVER-SERVICES===============*/
var card  = document.querySelectorAll('.card-services');
var more = document.querySelectorAll('.card-services__more');

if(card.length > 0) {
    for (let index = 0; index < card.length; index++) {
      const cardy = card[index];
      cardy.addEventListener("mouseover", function (e){
        const morey = more[index];
        
        morey.classList.add("active");
        e.preventDefault();
        
      });
    }
}
if(card.length > 0) {
  for (let index = 0; index < card.length; index++) {
    const cardy = card[index];
    cardy.addEventListener("mouseout", function (e){
      const morey = more[index];
      morey.classList.remove("active");
      e.preventDefault();
      
    });
  }
}

/*====================HOVER-CARD-DOCTOR===============*/

var CardDoctors = document.querySelectorAll('.card-doctors');
var imageDoctors = document.querySelectorAll('.card-doctors__image');
var moreDoctors = document.querySelectorAll('.card-doctors__more');

if(CardDoctors.length > 0) {
  for (let index = 0; index < CardDoctors.length; index++) {
    const CardDoctor = CardDoctors[index];
    CardDoctor.addEventListener("mouseover", function (e){
      const imageDoctor = imageDoctors[index];
      const moreDoctor = moreDoctors[index];
      moreDoctor.classList.add("active");
      imageDoctor.classList.add("active");
      CardDoctor.classList.add("active");
      e.preventDefault();
      
    });
  }
}
if(CardDoctors.length > 0) {
  for (let index = 0; index < CardDoctors.length; index++) {
    const CardDoctor = CardDoctors[index];
    CardDoctor.addEventListener("mouseout", function (e){
      const imageDoctor = imageDoctors[index];
      const moreDoctor = moreDoctors[index];
      moreDoctor.classList.remove("active");
      imageDoctor.classList.remove("active");
      CardDoctor.classList.remove("active");
      e.preventDefault();
      
    });
  }
}
/*====================SPOILER===============*/
var spoilers = document.querySelectorAll('.questions__spoiler');
var questionTexts = document.querySelectorAll('.questions__text');
var questionAnswers = document.querySelectorAll('.questions__answer');

if(spoilers.length > 0) {
  for (let index = 0; index < spoilers.length; index++) {
    const spoiler = spoilers[index];
    spoiler.addEventListener("click", function (e){
      const questionText = questionTexts[index];
      const questionAnswer = questionAnswers[index];
      questionText.classList.toggle("active");
      questionAnswer.classList.toggle("active");
      spoiler.classList.toggle("active");
      e.preventDefault();
      
    });
  }
}

/*====================NAVIGATION-FOOTER===============*/
var lists = document.querySelectorAll('.navigation-footer__title');
var links= document.querySelectorAll('.navigation-footer__list');

if(lists.length > 0) {
  for (let index = 0; index < lists.length; index++) {
    const list = lists[index];
    list.addEventListener("click", function (e){
      const link = links[index];
      
      link.classList.toggle("active");
      list.classList.toggle("active");
      
      e.preventDefault();
      
    });
  }
}