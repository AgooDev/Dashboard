angular
    .module('agooDash')
    .controller('autocompleteCtrl', [
        '$state',
        function ($state) {

            // autocomplete
            $('.autocomplete_template').on('click','#autocomplete_template_results .item', function(e) {
                e.preventDefault();
                var $this = $(this);
                $state.go($this.attr('href'));
                $('.autocomplete_template > input').val('');
            })

        }
    ]);

