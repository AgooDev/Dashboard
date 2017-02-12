angular
    .module('agooDash')
    .controller('products_gridCtrl', [
        '$scope',
        '$rootScope',
        'products_data',
        function ($scope,$rootScope,products_data) {

            // products data
            $scope.products_data = products_data;

        }
    ])
;