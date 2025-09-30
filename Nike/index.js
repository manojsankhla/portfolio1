$(document).ready(function(){
  $('.trand-collection').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      navText: [
          "<i class='fa fa-caret-left'></i>",
          "<i class='fa fa-caret-right'></i>"
      ],
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
          0: {
              items: 1
          },
          600: {
              items: 3
          },
          1000: {
              items: 5
          }
      }
  });
});

// trand -collection-2

const slider = document.getElementById("imgeslider");

const wit = 150;
const padd = 10;

function prevbtn() {
    slider.scrollLeft -= wit + padd;
}

function nextbtn() {
    slider.scrollLeft += wit + padd;
}