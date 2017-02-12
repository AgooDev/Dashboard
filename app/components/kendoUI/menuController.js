angular
    .module('agooDash')
    .controller('menuCtrl', [
        '$scope',
        function ($scope) {
            $scope.menuOrientation = "horizontal";
            $scope.onSelect = function(ev) {
                alert($(ev.item.firstChild).text());
            };
        }
    ]);