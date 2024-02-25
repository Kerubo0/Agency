



$(document).ready(function(){
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
  })
  
  