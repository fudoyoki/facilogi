/*var app = angular.module('app', []);

function Ctrl($scope) {
    
}*/

var close_form = $('.close-form');
var sb = $('.form-search');
var sbe = $('.search-expanded');
var listings = $('.listings');

init();

function init() {

	sb.slideDown('slow');

	bindUIActions();

}

function bindUIActions() {

	$('button.more').on("click", function() {

		listings.css('margin-left', '350px');

		//PURE CSS
		/*sbe.css({
			'opacity': 1,
			'display': 'block'
		});

		sbe.addClass('animated bounceInUp');*/

		//TWEEN
		sbe.css('display', 'block');
		TweenMax.from(sbe, 1, {y: 50, ease:Bounce.easeOut});

		sb.slideUp('slow');

	});

	$('button.more-trigger').on("click", function(e) {

		sbe.css('display', 'block');
		TweenMax.from(sbe, 1, {y: 50, ease:Bounce.easeOut});

	});

	close_form.on("click", function(e){

		e.preventDefault();
		e.stopPropagation();

		sbe.hide();
		sb.slideDown('slow');
		listings.css('margin-left', '0');

	});

	$('.btn-ct').on("click", function(e) {

		e.preventDefault();
		e.stopPropagation();

		$('.btn-ct').each(function() {

			$(this).removeClass("selected");

		});

		$(this).addClass("selected");

	});

}