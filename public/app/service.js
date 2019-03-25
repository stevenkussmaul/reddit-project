"use strict";

function Service ($http) {
    const self = this;
    let reply2;

    self.getEarth = () => {
        return $http({
            method: "Get",
            url: `https://www.reddit.com/r/EarthPorn.json`
        }).then((response) =>{
            return reply2 = response.data.data;
            console.log(self.reply);
            console.log(reply2);

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