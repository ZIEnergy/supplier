$('.header__sidebar-button').click(function(e) {
  e.preventDefault();
  $('.sidebar__content').slideToggle('fast');
});

$('.sidebar__close').click(function(e) {
  e.preventDefault();
  $('.sidebar__content').slideToggle('fast');
});