$('.header__mobile-button').click(function(e) {
  e.preventDefault();
  $('html').addClass('locked');
  $('.header__mobile-menu').slideToggle('fast');
});

$('.header__mobile-close').click(function(e) {
  e.preventDefault();
  $('html').removeClass('locked');
  $('.header__mobile-menu').slideToggle('fast');
});