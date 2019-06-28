
$(document).ready(function() {

// стрелка - скролл в топ сайта
let arrowupEl = $('.arrowup');

arrowupEl.click(function() {
  $('html, body').animate({ scrollTop: 0 }, 600);
  return false;
 });

console.log('werwr');
// == двойной слайдер ==

$('.thing__slide-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  // arrows: false,
  asNavFor: '.thing__slide',
  fade: true,
  prevArrow: $('.sale__slide-arrowL'),
  nextArrow: $('.sale__slide-arrowR'),
   responsive: [
  {
    breakpoint: 768,
    settings: {
      arrows: true,
      infinite: true,
    }
  },
  {
    breakpoint: 575,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
  }
  },
]

});

$('.thing__slide').slick({
  slidesToShow: 6,
  infinite: true,
  asNavFor: '.thing__slide-main',
  prevArrow: $('.slide__left-arrow'),
  nextArrow: $('.slide__rigth-arrow'),
  focusOnSelect: true,
  centerPadding: '50px'

});

// == слайдер  для моб версии ==

$(document).ready(function() {

$('.sale__slide-mobile').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: $('.sale__slide-arrowL'),
  nextArrow: $('.sale__slide-arrowR'),
   responsive: [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint: 575,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
  }
  },
]

});



$('.new__slide-mobile').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  prevArrow: $('.new__slide-arrowL'),
  nextArrow: $('.new__slide-arrowR'),
   responsive: [
  {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      infinite: true,
    }
  },
  {
    breakpoint: 575,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
  }
  },
]

});



});


// == мод окно  ==
let buttonHeaderEL        = $('#header__btn'),
    buttonFooterEL        = $('#footer__button'),
    buttonHeaderInEL      = $('#header__in'),
    buttonHeaderCartEL    = $('#header__cart'),
    buttonCartInEL        = $('.card__cart'),
    buttonShopEL          = $('.modal__button-continue'),
    buttonShopBuyEL       = $('.modal__button-shopping'),
    buttonThingBuyEL      = $('#thing__button'),
    buttonClickBuyEL      = $('.mini__buy-click'),
    modalEL               = $('.modal__question'),
    modalBuyEL            = $('.modal__buy'),
    modalRegEL            = $('.modal__reg'),
    modalAutorEL          = $('.modal__autor'),
    modalCartEL           = $('.modal__cart-in'),
    modalHeaderCloseEL    = $('.modal__header-button'),
    buttonCloselEL        = $('.form__header-button')


buttonThingBuyEL.on('click', function() {
  modalBuyEL.addClass('modal_activ');
}); 

buttonClickBuyEL.on('click', function() {
  modalBuyEL.addClass('modal_activ');
});

buttonCartInEL.on('click', function() {
  modalCartEL.addClass('modal_activ');
}); 

buttonHeaderCartEL.on('click', function() {
  modalCartEL.addClass('modal_activ');
});

buttonHeaderInEL.on('click', function() {
  modalRegEL.addClass('modal_activ');
}); 

buttonHeaderEL.on('click', function() {
  modalEL.addClass('modal_activ');
});  

buttonFooterEL.on('click', function() {
  modalEL.addClass('modal_activ');
});  

modalHeaderCloseEL.on('click', function() {
  modalCartEL.removeClass('modal_activ');
}); 

buttonShopEL.on('click', function() {
  modalCartEL.removeClass('modal_activ');
});

buttonShopBuyEL.on('click', function() {
  modalCartEL.removeClass('modal_activ');
  modalAutorEL.addClass('modal_activ');

});

buttonCloselEL.on('click', function() {
  modalEL.removeClass('modal_activ');
});
 
buttonCloselEL.on('click', function() {
  modalBuyEL.removeClass('modal_activ');
}); 


buttonCloselEL.on('click', function() {
  modalRegEL.removeClass('modal_activ');
}); 


buttonCloselEL.on('click', function() {
  modalAutorEL.removeClass('modal_activ');
}); 



// == переход на стр товар при клике на карточку ==

// $(document).ready(function(){
//      $(".card").click(function(){
//           window.location=$(this).find("a").attr("href"); 
//           return false;
//      });
// });

// == плавный переход между страницами сайта == 
$(document).ready(function() {
    $("body").css("display", "none");

    $("body").fadeIn(2000);

  $("a.transition").click(function(event){
    event.preventDefault();
    linkLocation = this.href;
    $("body").fadeOut(1000, redirectPage);
  });

  function redirectPage() {
    window.location = linkLocation;
  }
});













});



