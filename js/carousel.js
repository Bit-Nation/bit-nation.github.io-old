$(document).ready(function(){
  $('.past-events').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      // {
      //   breakpoint: 767,
      //   settings: {
      //     slidesToShow: 3,
      //     slidesToScroll: 3,
      //     dots: true
      //   }
      // },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});