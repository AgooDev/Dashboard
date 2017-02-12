angular
    .module('agooDash')
    .controller('gantt_chartCtrl', [
        '$scope',
        '$timeout',
        function ($scope,$timeout) {

            $scope.gantt_data = [
                {
                    name: "Concept",
                    series: [
                        {
                            id: 1,
                            name: "Brainstorm",
                            start: '08/01/2015',
                            end: '08/03/2015',
                            color: "#0277BD",
                            title: 'Custom title',
                            link: 'http://themeforest.com',
                            user_name: "Albert Mraz",
                            user_avatar: "assets/img/avatars/avatar_01_tn.png"
                        },
                        {
                            name: "Wireframes",
                            sub_series: [
                                {
                                    id: 2,
                                    start: '08/04/2015',
                                    end: '08/07/2015',
                                    color: "#0277BD",
                                    title: 'lorem ipsum dolor',
                                    user_name: "Geo Franecki",
                                    user_avatar: "assets/img/avatars/avatar_03_tn.png"
                                },
                                {
                                    id: 3,
                                    start: '08/10/2015',
                                    end: '08/14/2015',
                                    color: "#0277BD"
                                },
                                {
                                    id: 4,
                                    start: '08/18/2015',
                                    end: '08/26/2015',
                                    color: "#0277BD",
                                    user_name: "Buford Zboncak",
                                    user_avatar: "assets/img/avatars/avatar_06_tn.png"
                                }
                            ]
                        },
                        {
                            id: 5,
                            name: "Concept description",
                            start: '08/06/2015',
                            end: '08/10/2015',
                            color: "#0277BD"
                        }
                    ]
                },
                {
                    name: "Design",
                    series: [
                        {
                            id: 6,
                            name: "Sketching",
                            start: '08/08/2015',
                            end: '08/16/2015',
                            color: "#4527A0"
                        },
                        {
                            id: 7,
                            name: "Photography",
                            start: '08/10/2015',
                            end: '08/16/2015',
                            color: "#4527A0",
                            title: 'Some inspirations',
                            link: 'https://unsplash.com/',
                            user_name: "Christophe Hilpert",
                            user_avatar: "assets/img/avatars/avatar_05_tn.png"
                        },
                        {
                            name: "Feedback",
                            sub_series: [
                                {
                                    id: 8,
                                    start: '08/19/2015',
                                    end: '08/21/2015',
                                    color: "#4527A0"
                                },
                                {
                                    id: 9,
                                    start: '08/24/2015',
                                    end: '08/28/2015',
                                    color: "#4527A0"
                                }
                            ]

                        },
                        {
                            id: 10,
                            name: "Final Design",
                            start: '08/21/2015',
                            end: '08/29/2015',
                            color: "#4527A0",
                            user_name: "Etha Douglas",
                            user_avatar: "assets/img/avatars/avatar_02_tn.png"
                        }
                    ]
                },
                {
                    name: "Implementation",
                    series: [
                        {
                            id: 11,
                            name: "Specifications",
                            start: '08/26/2015',
                            end: '09/06/2015',
                            color: "#558B2F"
                        },
                        {
                            id: 12,
                            name: "Templates",
                            start: '09/04/2015',
                            end: '09/10/2015',
                            color: "#558B2F"
                        },
                        {
                            id: 13,
                            name: "Database",
                            start: '09/05/2015',
                            end: '09/13/2015',
                            color: "#558B2F"
                        },
                        {
                            id: 14,
                            name: "Integration",
                            start: '09/16/2015',
                            end: '10/10/2015',
                            color: "#558B2F",
                            user_name: "Sammie Pagac",
                            user_avatar: "assets/img/avatars/avatar_07_tn.png"
                        }
                    ]
                },
                {
                    name: "Testing & Delivery",
                    series: [
                        {
                            id: 15,
                            name:   "Focus Group",
                            start:  '10/17/2015',
                            end:    '10/27/2015',
                            color:  "#E65100"
                        },
                        {
                            name:   "Stress Test",
                            sub_series: [
                                {
                                    id: 16,
                                    start:  '10/25/2015',
                                    end:    '11/06/2015',
                                    color:  "#E65100"
                                },
                                {
                                    id: 17,
                                    start:  '11/09/2015',
                                    end:    '11/12/2015',
                                    color:  "#E65100"
                                }
                            ]
                        },
                        {
                            id: 18,
                            name:   "Delivery",
                            start:  '11/07/2015',
                            end:    '11/12/2015',
                            color:  "#E65100",
                            user_name: "Sabina Little",
                            user_avatar: "assets/img/avatars/avatar_06_tn.png"
                        }
                    ]
                }
            ];

            $timeout(function() {
                var $gantt_chart = $('#gantt_chart');
                $gantt_chart.ganttView({
                    data: $scope.gantt_data,
                    endDate: '12/31/2015',
                    // showToday: true, // highlight today
                    // startToday: true, // scroll to today
                    behavior: {
                        onClick: function (data) {
                            console.log("You clicked on an event: "+"\n", data);
                        },
                        onResize: function (data) {
                            console.log('You resized an event: '+"\n", data);
                        },
                        onDrag: function (data) {
                            console.log("You dragged an event: "+"\n", data);
                        }
                    }
                });

                $gantt_chart.find('[title]').each(function() {
                    $(this).attr('data-uk-tooltip',"{offset:4}");
                });

            })

        }
    ]);