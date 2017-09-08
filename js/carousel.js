var images = ["img/ui-2-phone.png", "img/ui-3-phone.png"]

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
