
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
  delay: 1500,
  disableOnInteraction: false,
},

  });

  const backToTopBtn = document.getElementById('back-to-top-btn');

  window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      backToTopBtn.style.display = 'block';    
    } else {
      backToTopBtn.style.display = 'none';
    }
  });
  backToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  const DiscoverOurProducts = document.getElementById('DiscoverOurProducts');

  DiscoverOurProducts.addEventListener('click', () => {
    document.body.scrollTop = 1350;
    document.documentElement.scrollTop = 1350;
  });
  
