$('.header__sidebar-button').click(function(e) {
  e.preventDefault();
  $('.sidebar__content').slideToggle('fast');
});

$('.sidebar__close').click(function(e) {
  e.preventDefault();
  $('.sidebar__content').slideToggle('fast');
});


if ($(window).width() > 1024 && $(window).height() > 800) {
  $(".sidebar").sticky({topSpacing:0});
};
