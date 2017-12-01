angular.module("app.component.modalRecordMatch", [])
    .component("modalRecordMatch", {
        templateUrl: "templates/modalRecordMatch.html",
        bindings: {
            matchId: "<"
        },
        controller: ["MatchesService", function(MatchesService){
            this.$onInit = function() {
                this.match = MatchesService.getById(parseInt(this.matchId));
            };
        }]
    });