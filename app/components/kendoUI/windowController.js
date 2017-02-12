angular
    .module('agooDash')
    .controller('windowCtrl', [
        '$scope',
        function ($scope) {
            $scope.hello = "Hello from Controller!";
        }
    ]);