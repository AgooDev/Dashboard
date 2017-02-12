angular
    .module('agooDash')
    .controller('breadcrumbsCtrl', [
        '$scope',
        '$rootScope',
        function ($scope,$rootScope) {

            $rootScope.toBarActive = true;

            $scope.$on('$destroy', function() {
                $rootScope.toBarActive = false;
            });
            
        }
    ]);