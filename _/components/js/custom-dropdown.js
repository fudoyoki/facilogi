var CustomDropDown = {

	init:function($element, $btn) {
		this.bindUIActions($element, $btn);
	},

	bindUIActions:function($element, $btn) {

		var $scope = angular.element($("body")).scope();
		$element.css('width', $btn.css('width'));

		$element.find('li').on("click", function(e) {
			e.preventDefault();
			e.stopPropagation();
			$element.toggle();
			$btn.html($(this).text() + '<span class="caret"></span>');
		});

		$btn.on("click", function(e){
			e.preventDefault();
			e.stopPropagation();
			$element.toggle();
		});

	}

}