var app = angular.module("FMN",[]);

app.controller('Controller', ['$scope', '$http', function($scope,$http) {
    $scope.title = "FMN: Forget Me Not";
    $scope.subtitle = 'Video Search using Natural Language'
    $scope.error = '';
    $scope.query = "";
    $scope.link = "";
    
    video_id = ""
  

    $scope.search = function(){
        $scope.error = '';
        if($scope.query != ""){
            vid = ytVidId($scope.query);
            if(vid){
                video_id = vid
                getVideo(vid);
            }else{
                $.ajax({
                    type: 'get',
                    url: 'query',
                    cache: false,
                    async: 'asynchronous',
                    dataType: 'json',
                    data: { video: video_id, query : $scope.query},
                    success: function(data) {
                      console.log(data)
                    },
                    error: function(request, status, error) {
                      console.log("Error: " + error);
                    }
                 });
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


