angular.module("app.component.upcomingMatches", ["app.matchesTable", "app.component.playerDetail"])
.component("upcomingMatches", {
    templateUrl: "templates/upcomingMatches.html",
    controller: "MatchesTableController"
});