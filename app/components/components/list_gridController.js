angular
    .module('agooDash')
    .controller('list_gridCtrl', [
        '$scope',
        '$rootScope',
        'products_data',
        function ($scope,$rootScope,products_data) {

            $rootScope.toBarActive = true;

            $scope.$on('$destroy', function() {
                $rootScope.toBarActive = false;
            });

            $scope.products_data = products_data;

            $scope.grid_view = true;
            $scope.list_view = false;

            $scope.changeView = function($event,view) {
                $event.preventDefault();
                if(view == 'grid') {
                    $scope.list_view = false;
                    $scope.grid_view = true;
                } else {
                    $scope.list_view = true;
                    $scope.grid_view = false;
                }
            }

        }
    ]);