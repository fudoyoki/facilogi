function init(){sb.slideDown("slow"),bindUIActions()}function bindUIActions(){$("button.more").on("click",function(){listings.css("margin-left","350px"),sbe.css("display","block"),TweenMax.from(sbe,1,{y:50,ease:Bounce.easeOut}),sb.slideUp("slow")}),$("button.more-trigger").on("click",function(s){sbe.css("display","block"),TweenMax.from(sbe,1,{y:50,ease:Bounce.easeOut})}),close_form.on("click",function(s){s.preventDefault(),s.stopPropagation(),sbe.hide(),sb.slideDown("slow"),listings.css("margin-left","0")}),$(".btn-ct").on("click",function(s){s.preventDefault(),s.stopPropagation(),$(".btn-ct").each(function(){$(this).removeClass("selected")}),$(this).addClass("selected")})}var close_form=$(".close-form"),sb=$(".form-search"),sbe=$(".search-expanded"),listings=$(".listings");init();