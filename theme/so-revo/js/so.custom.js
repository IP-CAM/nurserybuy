$(document).ready(function(){$("#close-posmotion-header").click(function(){$(".promotion-top").toggleClass("hidden-promotion"),$("body").toggleClass("hidden-promotion-body"),$(".promotion-top").hasClass("hidden-promotion")?$.cookie("open",0):$.cookie("open",1)}),setTimeout(function(){$("html, body").css({overflow:"auto",height:"100%"})},2e3),0==$.cookie("open")&&($(".promotion-top").addClass("hidden-promotion"),$("body").addClass("hidden-promotion-body")),$(".list-msg").owlCarousel2({pagination:!1,center:!1,nav:!1,dots:!1,loop:!0,slideBy:1,autoplay:!0,margin:30,autoplayTimeout:4500,autoplayHoverPause:!0,autoplaySpeed:1200,startPosition:0,responsive:{0:{items:1},480:{items:1},768:{items:1},1200:{items:1}}}),$(".horizontal").on("mouseenter",function(){$(".select_category select").blur()}),$(".cate-content-home5").owlCarousel2({pagination:!1,center:!1,nav:!1,dots:!1,loop:!0,slideBy:1,autoplay:!0,margin:30,autoplayTimeout:4500,autoplayHoverPause:!0,autoplaySpeed:1200,startPosition:0,responsive:{0:{items:1},480:{items:2},768:{items:3},1200:{items:4}}}),$(".slider-img-cate").owlCarousel2({pagination:!1,center:!1,nav:!1,loop:!0,dots:!1,slideBy:1,autoplay:!0,margin:0,autoplayTimeout:4500,autoplayHoverPause:!0,autoplaySpeed:1200,startPosition:0,responsive:{0:{items:1},480:{items:1},768:{items:1},1200:{items:1}}}),$(".slider-clients-say").owlCarousel2({pagination:!1,center:!1,nav:!1,loop:!0,slideBy:1,autoplay:!0,margin:0,autoplayTimeout:4500,autoplayHoverPause:!0,autoplaySpeed:1200,startPosition:0,responsive:{0:{items:1},480:{items:1},768:{items:1},1200:{items:1}}})});