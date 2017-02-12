angular
    .module('agooDash')
    .controller('comboboxCtrl', [
        '$scope',
        function ($scope) {
            $scope.usersDataSource = {
                serverFiltering: true,
                transport: {
                    read: {
                        url: "data/kUI_users_data.min.json"
                    }
                }
            };
        }
    ]);