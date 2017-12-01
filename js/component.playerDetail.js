angular.module("app.component.playerDetail", [])
.component("playerDetail", {
    templateUrl: "templates/playerDetail.html",
    bindings: {
        player: "="
    },
    controller: ["$scope", function($scope){
        this.$onInit = function() {
            this.modalParams = {
                title: this.player.name
            };
        };
    }]
});