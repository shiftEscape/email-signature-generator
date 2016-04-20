angular
	.module('signGenerator')
	.directive('pickerField', function() {
		return {
			restrict: 'E',
			scope: {
				placeholder: '@',
				details: '=',
				colors: '=',
			},
			templateUrl: 'app/views/pickerfield.tpl.html'
		};
	});
