$(document).ready(function(){





























$(".tabs__item").click(function(t){t.preventDefault(),$(".tabs__item").removeClass("tabs__item--active"),$(this).addClass("tabs__item--active")}),$(".tabs__item--about").click(function(t){$(".info__item").hide(),$(".info__item--about").fadeIn("fast")}),$(".tabs__item--characteristics").click(function(t){$(".info__item").hide(),$(".info__item--characteristics").fadeIn("fast")});


})