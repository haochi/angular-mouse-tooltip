angular.module('ihaochi', [])
.directive("ihaochiMouseTooltip", ['$window', '$document', function ($window, $document) {
    var defaultOffset = 10;

    return {
        scope: {
            xOffset: '=',
            yOffset: '='
        },
        transclude: true,
        template: '<div ng-transclude></div>',
        link: function(scope, element) {
            var mouseMove = "mousemove";

            var mouseMoveListener = function(e) {
                var xOffset = Number.isFinite(scope.xOffset) ? scope.xOffset : defaultOffset;
                var yOffset = Number.isFinite(scope.yOffset) ? scope.yOffset : defaultOffset;

                element.css("left", (e.clientX + xOffset) + 'px');
                element.css("top", (e.clientY + yOffset) + 'px');
            };

            $document.on(mouseMove, mouseMoveListener);

            element.css("position", "fixed");
            element.on('$destroy', function() {
                $document.off(mouseMove, mouseMoveListener);
            });
	    
        }
    };
}]);
