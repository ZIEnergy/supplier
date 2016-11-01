$(document).ready(function(){









$(".fancybox").fancybox({scrolling:"no",helpers:{overlay:{locked:!0}}});



$(".header__mobile-button").click(function(e){e.preventDefault(),$("html").addClass("locked"),$(".header__mobile-menu").slideToggle("fast")}),$(".header__mobile-close").click(function(e){e.preventDefault(),$("html").removeClass("locked"),$(".header__mobile-menu").slideToggle("fast")});


















$(".header__sidebar-button").click(function(e){e.preventDefault(),$(".sidebar__content").slideToggle("fast")}),$(".sidebar__close").click(function(e){e.preventDefault(),$(".sidebar__content").slideToggle("fast")}),$(window).width()>1024&&$(window).height()>800&&$(".sidebar").sticky({topSpacing:0});
$(".tabs__item").click(function(t){t.preventDefault(),$(".tabs__item").removeClass("tabs__item--active"),$(this).addClass("tabs__item--active")}),$(".tabs__item--about").click(function(t){$(".info__item").hide(),$(".info__item--about").fadeIn("fast")}),$(".tabs__item--characteristics").click(function(t){$(".info__item").hide(),$(".info__item--characteristics").fadeIn("fast")});


})