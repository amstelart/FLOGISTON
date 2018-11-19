// Если на проекте jQuery
$( document ).ready(function() {

  if(window.matchMedia('(min-width: 992px)').matches)
  {
    $(window).scroll(function() {
      if ($(window).scrollTop() >= 200) {
        $('.header-nav').addClass('header-nav--sticky');
      } else {
        $('.header-nav').removeClass('header-nav--sticky');
      }
    });
  }

});



// Изоляция без jQuery
// (function(){
//   // code
// }());

// На проекте нет jQuery, но хочется $( document ).ready...
// function ready(fn) {
//   if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
//     fn();
//   } else {
//     document.addEventListener('DOMContentLoaded', fn);
//   }
// }
//
// ready(function(){
//   // code
// });
