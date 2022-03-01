$(function(){
    // Banner-slider

$('.total-slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    fade:false,
    pauseOnHover:false,

  });

  // codepen js

  document.querySelector('.humburger').onclick = function() {
    this.classList.toggle('active');
  };

  // About slider
$('.about-main').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    fade:false,
    pauseOnHover:false,

    responsive: [
      {
        breakpoint:768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
    ]

  });
  // comment-slider
$('.slider-main').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    fade:false,
    pauseOnHover:false,


  });

  // team-slider

  $('.slider-main2').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    fade:false,
    pauseOnHover:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
    ]
  });

  // counter-up
  $('.counter').counterUp({
    delay: 10,
    time: 1000
    
});


new VenoBox({
  selector: '.my-image-links',
  numeration: true,
  infinigall: true,
  share: true,
  spinner: 'rotating-plane'
});

})