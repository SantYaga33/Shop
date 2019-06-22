
$(document).ready(function() {

// стрелка - скролл в топ сайта
let arrowupEl = $('.arrowup');

arrowupEl.click(function() {
  $('html, body').animate({ scrollTop: 0 }, 600);
  return false;
 });



// == двойной слайдер ==

$('.thing__slide-main').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  arrows: false,
  asNavFor: '.thing__slide',
  fade: true,

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

// == слайдер 1 для моб версии ==
$('.sale__slide-mobile').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  fade: true,
  prevArrow: $('.sale__slide-arrowL'),
  nextArrow: $('.sale__slide-arrowR'),

});

// == слайдер 2 для моб версии ==
$('.new__slide-mobile').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  fade: true,
  prevArrow: $('.new__slide-arrowL'),
  nextArrow: $('.new__slide-arrowR'),

});


// == мод окно задать вопрос ==
let buttonHeaderEL        = $('#header__btn'),
    buttonFooterEL        = $('#footer__button'),
    buttonHeaderInEL      = $('#header__in'),
    buttonHeaderCartEL    = $('#header__cart'),
    buttonThingBuyEL      = $('#thing__button'),
    modalEL               = $('.modal__question'),
    modalBuyEL            = $('.modal__buy'),
    modalRegEL            = $('.modal__reg'),
    modalCartEL           = $('.modal__cart-in'),
    modalHeaderCloseEL    = $('.modal__header-button'),
    buttonCloselEL        = $('.form__header-button')


buttonThingBuyEL.on('click', function() {
  modalBuyEL.addClass('modal_activ');
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

buttonCloselEL.on('click', function() {
  modalEL.removeClass('modal_activ');
});
 
buttonCloselEL.on('click', function() {
  modalBuyEL.removeClass('modal_activ');
}); 























});



