$(".owl-carousel").owlCarousel({
  center: true,
  loop: true,
  margin: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  nav: true,
  responsiveClass: true,
  arrows:true,
  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: true,
    },
    1000: {
      items: 3,
      nav: true,
    },
  },
});

$( ".owl-prev").html('<i class="fa-solid fa-arrow-left"></i>');
$( ".owl-next").html('<i class="fa-solid fa-arrow-right"></i>');