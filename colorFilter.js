// const black = document.querySelector("#color-black").value;
// const red = document.querySelector("#color-red").value;
// const blue = document.querySelector("#color-blue").value;
// const green = document.querySelector("#color-green").value;
// const yellow = document.querySelector("#color-yellow").value;
// const orange = document.querySelector("#color-orange").value;
// const gray = document.querySelector("#color-white").value;
// const white = document.querySelector("#color-white").value;

// function myFunction() {
//   if (black) {
//     document.querySelector(".selected-colors").innerHTML = `${black}`;
//   }
// }
// function myFunction() {
//   if (red) {
//     document.querySelector(".selected-colors").innerHTML = `${red}`;
//   }
// }
// function myFunction() {
//   if (blue) {
//     document.querySelector(".selected-colors").innerHTML = `${blue}`;
//   }
// }
$("#myCarousel").carousel({
  interval: 2000,
});

$(".carousel .carousel-item").each(function () {
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});
