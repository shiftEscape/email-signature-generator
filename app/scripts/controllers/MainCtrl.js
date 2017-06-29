angular
	.module('signGenerator')
	.controller('MainController', function($scope, $sce) {

		var defaultColor = '#505050';

		function initDefaults() {
			$scope.colors = {
				name: defaultColor,
				position: defaultColor,
				email: defaultColor,
				number: defaultColor,
				skype: defaultColor
			};
		}

		$scope.remoteImage = "http://codev.com/wp-content/uploads/2017/06/codev-header-logo.png";

		$scope.details = { name: "", position: "", email: "", number: "", skype: "" };

		$scope.isIncomplete = function() {
			var missing = 0;
			for(var i in $scope.details) {
				if(!$scope.details[i]) missing++;
			}
			return (missing == Object.keys($scope.details).length);
		}

		$scope.formatHTML = function(label, link, content) {
			return $sce.trustAsHtml(label + ": <a href='"+link+"'>"+content+"</a>");
		};

		$scope.reset = function() {
			$scope.details = {};
			initDefaults();
		}

		$scope.yearCopyright = function() {
			return 2016;
		}

		$scope.onSuccess = function(e) {
			e.clearSelection();
		}

		initDefaults();

  });
