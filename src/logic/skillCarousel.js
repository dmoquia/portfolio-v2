function SkillCarousel() {
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      loop: true,
      nav: false,
      autoplay: true,
      autoplayTimeout: 2000,
      stagePadding: 0,
      dots: false,
      responsive: {
        0: {
          items: 1,
          stagePadding: 0,
        },
        600: {
          items: 3,
          stagePadding: 0,
        },
        1000: {
          items: 5,
        },
        1400: {
          items: 6,
        },
      },
    });
  });
}

export default SkillCarousel;
