angular
    .module('agooDash')
    .controller('preloadersCtrl', [
        '$rootScope',
        '$timeout',
        function ($rootScope,$timeout) {
            $('.preloader_example').click(function() {
                $timeout(function() {
                    $rootScope.content_preloader_hide();
                },3000)
            })
        }
    ]);