angular.module("app.component.modalPlayerText", [])
.component("modalPlayerText", {
    templateUrl: "templates/modalPlayerText.html",
    bindings: {
        playerName: "<"
    },
    controller: ["PlayersService", function(PlayersService){
        this.$onInit = function() {
            this.player = PlayersService.getByName(this.playerName);
        };
    }]
})
.filter('filterMatchesText', function(){
    return function(matches) {
        if(matches === 0)
            return "zápasov";

        if(matches < 2)
            return "zápas";

        if(matches < 5)
            return "zápasy";

        else return "zápasov";
    };
})
.filter('filterPlayedMatches', function(){
    return function(matches) {
        return matches.filter(function(match){
            return match.isPlayed();
        });
    };
});