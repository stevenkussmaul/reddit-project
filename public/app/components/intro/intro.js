"use strict"

const intro = {
    templateUrl:"./app/components/intro/intro.html",
    controller: ["$location", function ($location) {
        const vm = this;

        vm.goEarthporn= () =>{
            $location.path('earthPorn');
        }; 

        vm.goAww = () => {
            $location.path('aww');
        }

        vm.onShow = () => {
            vm.showInstructions = !vm.showInstructions;
        }

    }]
}

angular 
    .module("HomeBrewReddit")
    .component("intro", intro);