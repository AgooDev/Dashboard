angular
    .module('agooDash')
    .controller('user_detailCtrl', [
        '$rootScope',
        '$scope',
        'user_data',
        function ($rootScope,$scope,user_data) {

            $scope.user_data = user_data[0];

            $scope.user_data_contacts = user_data[0].contact;

        }
    ])
;