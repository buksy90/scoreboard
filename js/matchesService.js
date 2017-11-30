angular.module("app.matchesService", ["app.match"])
.service("MatchesService", ["Match", function(Match){
    var matches = [];

    return {
        getMatches: function() {
            return matches;
        },

        create: function(homePlayer, awayPlayer) {
            return Match.new(homePlayer, awayPlayer);
        },

        register: function(match) {
            matches.push(match);
        }
    };
}]);