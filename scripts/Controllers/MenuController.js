app.controller('MenuController', function ($scope, $rootScope ) {

    $scope.extended = false;

    $scope.toggleExtend = function () {
        $scope.extended = !$scope.extended;

        // Extend or Shrink the menu
        if ($scope.extended) {
            $(".view_container").css('left', 300);
        } else {
            $(".view_container").css('left', 100);
        }
    }
});