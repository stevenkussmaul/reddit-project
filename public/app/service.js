"use strict";

function Service ($http) {
    const self = this;

    self.getEarth = () => {
        return $http({
            method: "Get",
            url: `https://www.reddit.com/r/EarthPorn.json`
        }).then((response) =>{
            self.reply = response.data.data;
            console.log(self.reply);
        })
        
    }

    self.getAww = () => {
        return $http({
            methods: "Get",
            url: `https://www.reddit.com/r/aww.json`
        }).then((answer) => {
            self.awwData = answer.data.data;
            console.log(self.awwData);
        })
    }
}

angular
    .module("HomeBrewReddit")
    .service("Service", Service)