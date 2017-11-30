angular.module("app.match", [])
.service("Match", function(){
    "use strict";

    function Match(homePlayer, awayPlayer) {
        var homeScore  = null;
        var awayScore  = null;
        var date       = null;

        homePlayer.addMatch(this);
        awayPlayer.addMatch(this);


        this.getHomePlayer = () => homePlayer;
        this.getAwayPlayer = () => awayPlayer;
        this.getWinner = function() {
            return this.isPlayed() === false || homeScore === awayScore ? null
                : homeScore > awayScore ? homePlayer : awayPlayer;
        };

        this.getHomeScore = () => homeScore;
        this.getAwayScore = () => awayScore;
        this.setHomeScore = function(score) {
            homeScore = score;
            homePlayer.setDirty();
            awayPlayer.setDirty();
            date = date || Date.now();
        };
        this.setAwayScore = function(score) {
            awayScore = score;
            homePlayer.setDirty();
            awayPlayer.setDirty();
            date = date || Date.now();
        };
        this.isPlayed = () => homeScore !== null && awayScore !== null;
    }

    return {
        "new": function(player1, player2) { return new Match(player1, player2); }
    };
});