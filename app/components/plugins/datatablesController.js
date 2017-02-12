angular
    .module('agooDash')
    .controller('dt_default',
        function($compile, $scope, $timeout, $resource, DTOptionsBuilder, DTColumnDefBuilder) {
            var vm = this;
            vm.dt_data = [];
            vm.dtOptions = DTOptionsBuilder
                .newOptions()
                .withDisplayLength(10)
                .withOption('initComplete', function() {
                    $timeout(function() {
                        $compile($('.dt-uikit .md-input'))($scope);
                    })
                });
            vm.dtColumnDefs = [
                DTColumnDefBuilder.newColumnDef(0),
                DTColumnDefBuilder.newColumnDef(1),
                DTColumnDefBuilder.newColumnDef(2),
                DTColumnDefBuilder.newColumnDef(3),
                DTColumnDefBuilder.newColumnDef(4),
                DTColumnDefBuilder.newColumnDef(5)
            ];
            $resource('data/dt_data.json')
                .query()
                .$promise
                .then(function(dt_data) {
                    vm.dt_data = dt_data;
                });
        }
    )
    .controller('dt_scroll_vertical',
        function($compile, $scope, $timeout, $resource, DTOptionsBuilder, DTColumnDefBuilder) {
            var vm = this;
            vm.dt_data = [];
            vm.dtOptions = DTOptionsBuilder
                .fromSource('data/dt_data.json')
                .withDisplayLength(10)
                .withOption('scrollY','200px')
                .withOption('scrollCollapse',false)
                .withOption('paging',false)
                .withOption('initComplete', function() {
                    $timeout(function() {
                        $compile($('.dt-uikit .md-input'))($scope);
                    })
                });
            vm.dtColumnDefs = [
                DTColumnDefBuilder.newColumnDef(0).withTitle('Name'),
                DTColumnDefBuilder.newColumnDef(1).withTitle('Position'),
                DTColumnDefBuilder.newColumnDef(2).withTitle('Office'),
                DTColumnDefBuilder.newColumnDef(3).withTitle('Extn.'),
                DTColumnDefBuilder.newColumnDef(4).withTitle('Start date'),
                DTColumnDefBuilder.newColumnDef(5).withTitle('Salary')
            ];

        }
    )
    .controller('dt_individual_search',
        function($compile, $scope, $timeout, $resource, DTOptionsBuilder, DTColumnDefBuilder) {
            var vm = this;
            vm.dtOptions = DTOptionsBuilder
                .fromSource('data/dt_data.json')
                .withPaginationType('full_numbers')
                .withColumnFilter({
                    aoColumns: [
                        {
                            type: 'text',
                            bRegex: true,
                            bSmart: true
                        },
                        {
                            type: 'text',
                            bRegex: true,
                            bSmart: true
                        },
                        {
                            type: 'text',
                            bRegex: true,
                            bSmart: true
                        },
                        {
                            type: 'number',
                            bRegex: true,
                            bSmart: true
                        },
                        {
                            type: 'number',
                            bRegex: true,
                            bSmart: true
                        },
                        {
                            type: 'number',
                            bRegex: true,
                            bSmart: true
                        }
                    ]
                })
                .withOption('initComplete', function() {
                    $timeout(function() {
                        $compile($('.dt-uikit .md-input'))($scope);
                    })
                });
            vm.dtColumnDefs = [
                DTColumnDefBuilder.newColumnDef(0).withTitle('Name'),
                DTColumnDefBuilder.newColumnDef(1).withTitle('Position'),
                DTColumnDefBuilder.newColumnDef(2).withTitle('Office'),
                DTColumnDefBuilder.newColumnDef(3).withTitle('Extn.'),
                DTColumnDefBuilder.newColumnDef(4).withTitle('Start date'),
                DTColumnDefBuilder.newColumnDef(5).withTitle('Salary')
            ];
        }
    )
    .controller('dt_col_vis',
        function($compile, $scope, $timeout, $resource, DTOptionsBuilder, DTColumnDefBuilder) {
            var vm = this;
            vm.dtOptions = DTOptionsBuilder
                .fromSource('data/dt_data.json')
                .withDOM("<'dt-uikit-header'<'uk-grid'<'uk-width-medium-2-3'l><'uk-width-medium-1-3'f>>>" +
                "<'uk-overflow-container'tr>" +
                "<'dt-uikit-footer'<'uk-grid'<'uk-width-medium-3-10'i><'uk-width-medium-7-10'p>>>")
                .withPaginationType('full_numbers')
                // Active Buttons extension
                .withButtons([
                    'colvis'
                ]);
            vm.dtColumnDefs = [
                DTColumnDefBuilder.newColumnDef(0).withTitle('Name'),
                DTColumnDefBuilder.newColumnDef(1).withTitle('Position'),
                DTColumnDefBuilder.newColumnDef(2).withTitle('Office'),
                DTColumnDefBuilder.newColumnDef(3).withTitle('Extn.'),
                DTColumnDefBuilder.newColumnDef(4).withTitle('Start date'),
                DTColumnDefBuilder.newColumnDef(5).withTitle('Salary')
            ];
            //vm.dtOptions.buttons().container().appendTo( $dt_buttons );
        }
    )
    .controller('dt_table_tools',
        function($compile, $scope, $timeout, $resource, DTOptionsBuilder, DTColumnDefBuilder) {
            var vm = this;
            vm.dtOptions = DTOptionsBuilder
                .fromSource('data/dt_data.json')
                .withDOM("<'dt-uikit-header'<'uk-grid'<'uk-width-medium-2-3'l><'uk-width-medium-1-3'f>>>" +
                    "<'uk-overflow-container'tr>" +
                    "<'dt-uikit-footer'<'uk-grid'<'uk-width-medium-3-10'i><'uk-width-medium-7-10'p>>>")
                .withPaginationType('full_numbers')
                // Active Buttons extension
                .withButtons([
                    {
                        extend:    'copyHtml5',
                        text:      '<i class="uk-icon-files-o"></i> Copy',
                        titleAttr: 'Copy'
                    },
                    {
                        extend:    'print',
                        text:      '<i class="uk-icon-print"></i> Print',
                        titleAttr: 'Print'
                    },
                    {
                        extend:    'excelHtml5',
                        text:      '<i class="uk-icon-file-excel-o"></i> XLSX',
                        titleAttr: ''
                    },
                    {
                        extend:    'csvHtml5',
                        text:      '<i class="uk-icon-file-text-o"></i> CSV',
                        titleAttr: 'CSV'
                    },
                    {
                        extend:    'pdfHtml5',
                        text:      '<i class="uk-icon-file-pdf-o"></i> PDF',
                        titleAttr: 'PDF'
                    }
                ]);
            vm.dtColumnDefs = [
                DTColumnDefBuilder.newColumnDef(0).withTitle('Name'),
                DTColumnDefBuilder.newColumnDef(1).withTitle('Position'),
                DTColumnDefBuilder.newColumnDef(2).withTitle('Office'),
                DTColumnDefBuilder.newColumnDef(3).withTitle('Extn.'),
                DTColumnDefBuilder.newColumnDef(4).withTitle('Start date'),
                DTColumnDefBuilder.newColumnDef(5).withTitle('Salary')
            ];
        }
    );