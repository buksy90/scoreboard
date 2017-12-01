angular.module("app.matchesTable", ["app.matchesService"])
    .controller("MatchesTableController", ["$scope", "MatchesService", function($scope, MatchesService){
        $scope.matches = MatchesService.getMatches();
    }])
    .filter('orderNextMatches', function(){
        return function(matches) {
            return matches
                .filter(function(match){
                    return match.isPlayed() === false;
                })
                .sort(function(a, b) {
                    // Put players that played less matches first
                    var played1 = a.getHomePlayer().getPlayedMatchesCount() + a.getAwayPlayer().getPlayedMatchesCount();
                    var played2 = b.getHomePlayer().getPlayedMatchesCount() + b.getAwayPlayer().getPlayedMatchesCount();
                    if(played1 !== played2) {
                        return played1 - played2;
                    }

                    var pause1 = a.getHomePlayer().getPause() + a.getAwayPlayer().getPause();
                    var pause2 = b.getHomePlayer().getPause() + b.getAwayPlayer().getPause();

                    return pause2 - pause1;
                });
        };
    })
    .filter('orderPlayedMatches', function(){
        return function(matches) {
            return matches
                .filter(function(match){
                    return match.isPlayed();
                })
                .sort(function(a,b){
                    return a.date - b.date;
                });
        };
    });