angular
    .module('agooDash')
    .controller('nestableCtrl', [
        '$scope',
        '$rootScope',
        '$state',
        'utils',
        function ($scope,$rootScope,$state,utils) {
            var $nestable = $('#nestable');
            if($nestable.length) {

                // loop through nestable objects
                function loop_nestable(obj, ul) {
                    $.each(obj, function(key, val) {

                        var content = $nestable.find('[data-id='+ val.id +']').html();

                        if(val && typeof val === "object") {
                            var li = $("<li class='uk-nestable-item' data-id='"+ val.id +"'>" + content + "</li>").appendTo(ul);

                            if(val.children) {
                                var ul2 = $("<ul>").appendTo(li);
                                loop_nestable(val.children, ul2);
                            }
                        } else {
                            $("<li class='uk-nestable-item' data-id='"+ val.id +"'>" + content + "</li>").appendTo(ul);
                        }

                    });
                }

                // check if localStorage is supported
                if (utils.lsTest()) {
                    if (localStorage.getItem("nestable_items") !== null) {
                        // get values from localStorage
                        var nestable_array = localStorage.getItem("nestable_items");
                        // clone main nestable list
                        var $nestable_cloned = $nestable.clone().empty();
                        // loop through localStorage objects to sort list
                        loop_nestable(JSON.parse(nestable_array),$nestable_cloned);

                        // replace original nestable list items with sorted list items
                        $nestable
                            .html($nestable_cloned.html())
                            .after('<a class="md-btn" href="#" id="restore_nestable">Restore</a>');

                        // restore original order on button click
                        $('body').on('click', '#restore_nestable', function() {
                            localStorage.removeItem('nestable_items');
                            $state.reload();
                        })

                    }
                }

                // manually init nestable
                var nestable = UIkit.nestable($nestable, {});

                // serialize nestable on change
                $nestable.on('change.uk.nestable',function() {
                    var serialized_data = $nestable.data("nestable").serialize();
                    // check if localStorage is supported
                    if (utils.lsTest()) {
                        if( (localStorage.length === 0) || (localStorage.getItem("nestable_items") != JSON.stringify(serialized_data)) ) {
                            localStorage.setItem("nestable_items", JSON.stringify(serialized_data));
                        }
                        if(!$('#restore_nestable').length) {
                            $nestable.after('<a class="md-btn" href="#" id="restore_nestable">Restore</a>');
                        }
                    }
                });

            }
        }
    ]);