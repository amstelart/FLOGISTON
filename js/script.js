// (function(){
// код
// }());

svg4everybody();

$( document ).ready(function() {

  var t0;

  $('#toTop').hide().on('click', function(event){
    event.preventDefault();
    $('html, body').animate({scrollTop:0}, 300);
  });

  $(window).on('scroll', function(){
    clearTimeout(t0);
    t0 = setTimeout(function () {
        showScrollTopButton();
      }, 100);
  });

  showScrollTopButton();

  function showScrollTopButton(){
    if ( $(document).scrollTop() >= 900 ) {
      $('#toTop').fadeIn();
    }
    else {
      $('#toTop').fadeOut();
    }
  }

});

// $(document).ready(function(){

//   $("#owl-carousel-demo").owlCarousel({
//     items: 3,
//     nav: true,
//     loop: true,
//     center: true,
//     responsive : {
//       0 : {
//         items: 1,
//         nav: true,
//         loop: true,
//         center: true,
//       },
//       480 : {
//         items: 3,
//       },
//       768 : {
//         items: 3,
//       },
//       992 : {
//         items: 3,
//       },
//       1200 : {
//         items: 3,
//       },
//       1800 : {
//         items: 3,
//       }
//     }
//   });

// });

document.addEventListener('DOMContentLoaded', function(){
  objectFitImages();
});

// Если на проекте jQuery
// $( document ).ready(function() {
//   // code
// });

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
