angular.module("app.component.modalRecordMatch", ["ui.router", "app.matchesService", "app.playersService"])
    .component("modalRecordMatch", {
        templateUrl: "templates/modalRecordMatch.html",
        bindings: {
            matchId: "<"
        },
        controller: ["MatchesService", "PlayersService", "$state", "$rootScope", function(MatchesService, PlayersService, $state, $rootScope){
            this.match = null;
            this.homeScore = null;
            this.awayScore = null;

            this.$onInit = function() {
                this.match = MatchesService.getById(parseInt(this.matchId));

                this.homeScore = this.match.getHomeScore();
                this.awayScore = this.match.getAwayScore();
            };

            this.save = function() {
                if(this.canSave() === false)
                    return false;

                this.match.setHomeScore(parseInt(this.homeScore));
                this.match.setAwayScore(parseInt(this.awayScore));

                PlayersService.incrementPauseExcept([this.match.getHomePlayer(), this.match.getAwayPlayer()]);

                $state.go("main");
            };

            this.canSave = function() {
                return (this.match === null || isNaN(parseInt(this.homeScore)) || isNaN(parseInt(this.awayScore))) === false;
            };

            this.reset = function() {
                if(this.canReset() === false)
                    return false;

                this.match.setHomeScore(null);
                this.match.setAwayScore(null);

                $state.go("main");
            };

            this.canReset = function() {
                return this.match !== null && this.match.isPlayed() === true;
            }
        }]
    });