
$(document).ready(function() {

// стрелка - скролл в топ сайта
let arrowupEl = $('.arrowup');

arrowupEl.click(function() {
  $('html, body').animate({ scrollTop: 0 }, 600);
  return false;
 });


// == слайдер ==
// $('.thing__slide').slick({
// 	slidesToShow: 6,
// 	slidesToScroll: 2,
// 	infinite: true,
// 	// autoplay: true,
// 	prevArrow: $('.slide__left-arrow'),
// 	nextArrow: $('.slide__rigth-arrow'),
// 	 responsive: [
//   {
//     breakpoint: 1201,
//     settings: {
//       slidesToShow: 6,
//       slidesToScroll: 2,
//       infinite: true,
//     }
//   },
//   {
//     breakpoint: 1000,
//     settings: {
//       slidesToShow: 1,
//       slidesToScroll: 1
//     }
//   },
//   {
//     breakpoint: 320,
//     settings: {
//       slidesToShow: 1,
//       slidesToScroll: 1
//   }
//   },
// ]



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

























});



