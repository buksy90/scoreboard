angular.module("app.component.matchesHistory", ["app.matchesTable", "app.component.playerDetail"])
.component("matchesHistory", {
    templateUrl: "templates/matchesHistory.html",
    controller: "MatchesTableController"
});