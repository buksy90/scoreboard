(function(angular){
    "use strict";

    angular.module("app.player", [])
        .service("Player", function(){
            function Player(name) {
                this.name           = name || null;
                this.matches        = [];
                this._wins          = null;
                this._loses         = null;
                this._ties          = null;
                this.logo           = null;
                this.pauseLength    = 0;
            }

            Player.prototype.getWins = function() {
                if(this._wins !== null)
                    return this._wins;

                let self    = this;
                this._wins  = this.matches
                    .filter(function(match){
                        return match.getWinner() === self;
                    });

                //console.log("wins", this.name, this._wins);
                return this._wins;
            };

            Player.prototype.setDirty = function() {
                this._wins      = null;
                this._loses     = null;
                this._ties      = null;
                this.resetPause();
            };

            Player.prototype.getWinsCount = function() { return this.getWins().length; };

            Player.prototype.getLoses = function() {
                if(this._loses !== null)
                    return this._loses;

                var self    = this;
                this._loses = this.matches
                    .filter(function(match){
                        var winner = match.getWinner();
                        return match.isPlayed() === true && winner && winner !== self;
                    });

                //console.log("loses", this.name, this._loses);
                return this._loses;
            };

            Player.prototype.getLosesCount = function() { return this.getLoses().length; };

            Player.prototype.getTies = function() {
                if(this._ties !== null)
                    return this._ties;

                let self    = this;
                this._ties  = this.matches
                    .filter(function(match){
                        return match.isPlayed() === true && match.getHomeScore() === match.getAwayScore();
                    });

                //console.log("ties", this.name, this._ties);
                return this._ties;
            };
            Player.prototype.getTiesCount = function() { return this.getTies().length; };

            Player.prototype.getLosesCount = function() { return this.getLoses().length; };

            Player.prototype.getPoints = function() {
                return this.getWinsCount() * 2 + this.getTiesCount();
            };

            Player.prototype.getPlayedMatchesCount = function() {
                return this.matches.filter((m) => m.isPlayed() === true).length;
            };

            Player.prototype.setLogo = function(logo) {
                this.logo = logo;
            };
            Player.prototype.getLogo = function() {
                return this.logo;
            };

            Player.prototype.addMatch = function(match) {
                this.matches.push(match);
            };

            Player.prototype.resetPause = function() {
                this.pauseLength = 0;
            };
            Player.prototype.incrementPause = function() {
                this.pauseLength++;
            };
            Player.prototype.getPause = function() {
                return this.pauseLength;
            };

            return {
                "new": function(name) { return new Player(name); }
            };
        });

}(angular));
