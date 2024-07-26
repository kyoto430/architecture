if (window.innerWidth <= 768) {
  console.log('slider running...');

  new Swiper('.slider-1', {
    spaceBetween: 20,
    loop: false,
    navigation: {
      prevEl: '.btn-prev-1',
      nextEl: '.btn-next-1',
    },
    pagination: {
      el: '.pagination-1',
      clickable: true,
    },
  });
}
