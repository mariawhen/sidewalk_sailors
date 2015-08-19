$(document).ready(function(){
     // On swipe event
$('.data').on('swipe', function(event, slick, direction){
  console.log(direction);
  // left
});

// On edge hit
$('.data').on('edge', function(event, slick, direction){
  console.log('edge was hit')
});

// On before slide change
$('.data').on('beforeChange', function(event, slick, currentSlide, nextSlide){
  console.log(nextSlide);
});

 $('.data').slick({
      arrows: true,
      centerMode: false,
      centerPadding: '60px',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '40px',
            slidesToShow: 1
          }
        }
      ]
    });

 $('.lazy').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 3,
  slidesToScroll: 1
});


});
