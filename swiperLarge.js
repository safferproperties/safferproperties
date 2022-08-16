const swiper = new Swiper('.swiper', {
    // Optional parameters
    slidesPerView: 1,
    centerSlides: true,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,   
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });