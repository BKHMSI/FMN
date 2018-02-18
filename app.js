var app = angular.module("FMN",[]);

app.controller('Controller', ['$scope', '$http', function($scope,$http) {
    $scope.title = "FMN: Forget Me Not";
    $scope.subtitle = 'Video Search using Natural Language'
    $scope.error = '';
    $scope.query = "";
    $scope.link = "";

    $scope.search = function(){
        $scope.error = '';
        if($scope.query != ""){
            vid = ytVidId($scope.query);
            if(vid){
                getVideo(vid);
            }else{

            }
        }else{
            $scope.error = "Error: You didn't provide a query";
        }
    }


}]);

function ytVidId(url) {
    var p = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
    return (url.match(p)) ? RegExp.$1 : false;
}

function getVideo(vid){
    player.loadVideoById({suggestedQuality: 'large', videoId: vid});
}


