/*$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    center: true,
    nav:true,
    dots: true,
    NavText:[
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angel-right'></i>",
    ],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
           
        },
        1000:{
            items:3,
        }
    }
  })
}) */

// Testimonial section slider...owl carousel
jQuery(document).ready(function ($) {
  "use strict";
  //  TESTIMONIALS CAROUSEL HOOK
  $('#customers-testimonials').owlCarousel({
    loop: true,
    center: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      1170: {
        items: 3
      }
    }
  });
});
// End testimonial section slider





