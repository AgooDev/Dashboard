angular
    .module('agooDash')
    .controller('country_listCtrl', [
        '$scope',
        '$timeout',
        function ($scope,$timeout) {

            $scope.table = {
                'row4': true
            };

            $scope.table2 = {
                'row1': true
            }
        }
    ]);