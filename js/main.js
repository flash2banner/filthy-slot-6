$(document).ready(function () {
  $(".slider").slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });
});

$(function () {
  if ($(window).width() < 840) {
    $(document).ready(function () {
      $(".bio__text").collapser({
        mode: "words",
        truncate: 200,
        showText: '<br><br><span class="show-button">Read More ›</span>',
        hideText: '<br><br><span class="show-button">Hide ^^^</span>',
      });
    });
  }
});


