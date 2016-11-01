$('.fancybox').click(function() {
  $(this).addClass('fancybox-active');
});

$('.fancybox').fancybox({
  helpers : {
    overlay: {
      locked: true
    }
  },
  afterClose: function() {
   if ($(window).width() < 1039) {
     setTimeout(function () {
       $('html, body').scrollTop($('.fancybox-active').offset().top - 200);
       $('.fancybox').removeClass('fancybox-active');
     }, 208);
   }
  }
});