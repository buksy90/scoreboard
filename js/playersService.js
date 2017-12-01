angular.module("app.playersService", ["app.player", "app.match"])
.service("PlayersService", ["Player", "Match", function(Player, Match){
    "use strict";
    var players = [];

    return {
        getPlayers: function() { return players; },

        create: function(name) { return Player.new(name); },

        register: function(player) { players.push(player); },

        incrementPauseExcept: function(exceptPlayers) {
            for(var i = 0; i < players.length; i++) {
                let p = players[i];

                if(exceptPlayers.indexOf(p) >= 0)
                    continue;

                p.incrementPause();
            }
        },

        getByName: function(name) {
            for(var i = 0; i < players.length; i++) {
                if(players[i].name === name)
                    return players[i];
            }

            return null;
        }
    };
}]);