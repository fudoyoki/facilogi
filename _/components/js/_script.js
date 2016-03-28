var base_url = window.location.href.replace(/([a-zA-Z-_]*).html(\/[0-9a-zA-Z-_/]*)?/i, ''), close_form = $('.close-form'), sb = $('.form-search'), sbe = $('.search-expanded'), listings = $('.listings'), ctBtn = $('.btn-ct');

function Main() {
	sb.slideDown('slow');
}

var app = angular.module('app', [])
.controller('appController', ['$scope', '$http', function appController($scope, $http) {

	$http.get(base_url + '_/json/data.json').success(function(data){

		$scope.suburbs = data.suburbs;
		$scope.prices = data.prices;
		$scope.types = data.types;
		$scope.bathrooms = data.bathrooms;
		$scope.spaces = data.spaces;
		$scope.categories = data.categories;
		$scope.sortBy = data.sortBy;
		$scope.additional = data.additional;

		$http.get(base_url + '_/json/listings.json').success(function(data1) {

			$scope.listings = data1.listings;

		});

	});

	$scope.data = {

    	suburb: null,
    	minPrice: null,
    	maxPrice: null,
    	minRooms: null,
    	maxRooms: null
    	
   	};

   	$scope.moreClick = function() {

   		listings.css('margin-left', '350px');
		sbe.css('display', 'block');
		TweenMax.from(sbe, 1, {y: 50, ease:Bounce.easeOut});
		sb.slideUp('slow');

   	}

   	$scope.moreTrigger = function() {

   		sbe.css('display', 'block');
		TweenMax.from(sbe, 1, {y: 50, ease:Bounce.easeOut});

   	}

   	$scope.closeForm = function() {

		sbe.hide();
		sb.slideDown('slow');
		listings.css('margin-left', '0');

   	}

}]).directive('toggleClass', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
    		element.bind('click', function() {

    			ctBtn.each(function() {
					ctBtn.removeClass("selected");
				});

                element.toggleClass(attrs.toggleClass);
            });
        }
    };
});