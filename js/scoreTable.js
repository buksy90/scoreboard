angular.module("app.scoreTable", ["app.playersService", "app.matchesService"])
.controller("ScoreTableController", ["$scope", "PlayersService", "MatchesService", function($scope, PlayersService, MatchesService){
    $scope.players = PlayersService.getPlayers();
}])
.filter('orderByPoints', function(){
    return function(players) {
        return players.sort(function(a, b) {
            return b.getPoints() - a.getPoints();
        });
    };
});