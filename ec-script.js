jQuery( document ).ready(function( $ ) {
$('.img1').mouseover(function() {
  $('.ec-line').addClass('ec-hover');
});

$('.img1').mouseout(function() {
  $('.ec-line').removeClass('ec-hover');
});

$('.img2').mouseover(function() {
  $('.ec-line2').addClass('ec-hover');
});

$('.img2').mouseout(function() {
  $('.ec-line2').removeClass('ec-hover');
});

$('.img3').mouseover(function() {
  $('.ec-line3').addClass('ec-hover');
});

$('.img3').mouseout(function() {
  $('.ec-line3').removeClass('ec-hover');
});

$('.img4').mouseover(function() {
  $('.ec-line4').addClass('ec-hover');
});

$('.img4').mouseout(function() {
  $('.ec-line4').removeClass('ec-hover');
});
});