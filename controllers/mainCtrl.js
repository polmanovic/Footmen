angular.module('mainCtrl', []) 
    .controller('mainCtrl', ['$scope', '$http', 'footmenService', '$timeout', function ($scope, $http, footmenService, $timeout) {

        var vm = this;
        var video = $("#video")[0];
        $scope.muteButton = false;


        $scope.soundVideo = function() {
            if (video.muted) {
                video.muted = false;
                video.volume = 0;
                vm.volumeUp();
                $scope.videoSound = true;
                $scope.hideVideoText = true;
            } else {
                vm.volumeDown();
                $scope.videoSound = false;
                $scope.hideVideoText = false;
            }
        }

        vm.volumeUp = function() {
            if (video.volume < 0.99) {
                video.volume = video.volume + 0.1;
                setInterval(function() { vm.volumeUp() }, 1000);
            } else {
                video.volume = 1;
            }
        }

        vm.volumeDown = function() {
            if (video.volume > 0.01) {
                video.volume = video.volume - 0.1;
                setInterval(function() { vm.volumeDown() }, 1000);
            } else {
                video.volume = 0;
                video.muted = true;
            }
        }

}]);













