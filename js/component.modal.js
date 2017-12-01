angular.module("app.component.modal", ["ui.router"])
.component("modal", {
    templateUrl: "templates/modal.html",
    bindings: {
        modalParams: "<"
    },
    controller: "ModalController"
})
.controller("ModalController", [function(){
    this.$onInit = function(){
        if(!this.modalParams)
            console.error("Modal called without params");
    };
}]);