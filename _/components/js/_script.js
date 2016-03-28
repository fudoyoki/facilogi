var base_url = window.location.href.replace(/([a-zA-Z-_]*).html(\/[0-9a-zA-Z-_/]*)?/i, ''), close_form = $('.close-form'), sb = $('.form-search'), sbe = $('.search-expanded'), listings = $('.listings'), ctBtn = $('.btn-ct'), ctBtnTop = $('.btn-ct-top'), dropdowns = [{'elem':'.dd-min-price', 'btn':'.btn-min-price'}, {'elem':'.dd-max-price', 'btn':'.btn-max-price'}, {'elem':'.dd-bathrooms', 'btn':'.btn-bathrooms'}, {'elem':'.dd-spaces', 'btn':'.btn-spaces'}, {'elem':'.dd-type', 'btn':'.btn-type'}, {'elem':'.dd-category', 'btn':'.btn-category'}, {'elem':'.dd-sort-by', 'btn':'.btn-sort-by'}, {'elem':'.dd-additional', 'btn':'.btn-additional'}];

function Main() {

	setTimeout(bindUIActions, 0);
	sb.slideDown('slow');

}

function bindUIActions(){

	$(".chosen-select").chosen({no_results_text: "Aucun résultats trouvés"});

	for(var i = 0; i < dropdowns.length; i++) {
		CustomDropDown.init($(dropdowns[i].elem), $(dropdowns[i].btn));
	}

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
    	maxRooms: null,
    	rent: 0
   	};

   	$scope.moreClick = function() {
   		$scope.updateChosen($(".chosen-select-expanded"));
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
   		$scope.updateChosen($(".chosen-select"));
		sbe.hide();
		sb.slideDown('slow');
		listings.css('margin-left', '0');
   	}

   	$scope.updateChosen = function($element) {
   		$element.trigger("chosen:updated");
   		$element.chosen({no_results_text: "Aucun résultats trouvés"});
   		if($scope.data.suburb == null || $scope.data.suburb == []) {
   			$('.suburbs').data('placholder', 'Select a suburb');
   		}
   	}

}]).directive('toggleClass', function() {
    return {
        restrict: 'A',

        link: function($scope, $element, $attrs) {
    		$element.bind('click', function() {

    			$scope.data.rent = $element.val();
    			($element.hasClass('btn-ct')) ? ctBtn.removeClass("selected") : ctBtnTop.removeClass("selected");
    			$element.toggleClass($attrs.toggleClass);

            });
        }
    };
});