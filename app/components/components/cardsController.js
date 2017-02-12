angular
    .module('agooDash')
    .controller('cardsCtrl', [
        '$scope',
        '$timeout',
        function ($scope,$timeout) {

            $scope.selectize_card_options = ["Item A", "Item B", "Item C"];

            $scope.selectize_card_config = {
                create: false,
                maxItems: 1,
                placeholder: 'Select...'
            };

            $scope.switch_card = true;

            $scope.selectize_a_data = {
                options: [
                    {
                        id: 1,
                        title: "Item A1",
                        value: "a1",
                        parent_id: 1
                    },
                    {
                        id: 2,
                        title: "Item B1",
                        value: "b1",
                        parent_id: 1
                    },
                    {
                        id: 3,
                        title: "Item C1",
                        value: "c1",
                        parent_id: 1
                    },
                    {
                        id: 4,
                        title: "Item A2",
                        value: "a2",
                        parent_id: 2
                    },
                    {
                        id: 5,
                        title: "Item B2",
                        value: "b2",
                        parent_id: 2
                    },
                    {
                        id: 6,
                        title: "Item C2",
                        value: "c2",
                        parent_id: 2
                    }
                ]
            };

            $scope.selectize_a_config = {
                create: false,
                maxItems: 1,
                placeholder: 'Select...',
                optgroupField: 'parent_id',
                optgroupLabelField: 'title',
                optgroupValueField: 'ogid',
                valueField: 'value',
                labelField: 'title',
                searchField: 'title'
            };

            $scope.randomProgress = function($event) {
                var rand = Math.floor((Math.random() * 100) + 1);
                $($event.currentTarget).closest('.md-card').attr('card-progress',rand);
            }


        }
    ]);