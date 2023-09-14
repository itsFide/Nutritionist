const swiper = new Swiper('.testimonials__mobile', {
    // Optional parameters
    loop: true,
    
    spaceBetween: 40,
    centeredSlides: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    breakpoints:{
        
        320:{
            slidesPerView:1,
        },
        650:{
            slidesPerView:1.5,
        },
    }
});