var images = ["img/ui-01.jpg", "img/ui-02.jpg", "img/ui-03.jpg", "img/ui-04.jpg", "img/ui-05.jpg", "img/ui-06.jpg", "img/ui-07.jpg", "img/ui-08.jpg", "img/ui-09.jpg", "img/ui-10.jpg", "img/ui-11.jpg", "img/ui-12.jpg"]

var current_index = 0

function doCarousel() {
  document.getElementById("carousel_placeholder").src = images[current_index]

  current_index++
  if (current_index == images.length) {
    current_index = 0
  }

  setTimeout(doCarousel, 10000)
}

setTimeout(doCarousel, 1000)
