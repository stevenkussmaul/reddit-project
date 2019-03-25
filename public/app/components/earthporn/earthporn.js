"use strict";

const earthPorn = {
    templateUrl:"./app/components/earthporn/earthporn.html",
    controller: ["$http","Service", "$location" , "$scope", function ($http, Service, $location, $scope) {
        const vm = this;

        // Service.getEarth()

        // let earthObj = Service.getEarth();

        // vm.getEarth = () => {
        //     return $http({
        //         method: "Get",
        //         url: `https://www.reddit.com/r/EarthPorn.json`
        //     }).then((response) =>{
        //         vm.reply = response.data.data;
        //         // vm.reply2 = response;

        //         // console.log(vm.reply);
        //         // console.log(vm.reply2);

    
        //     })
            
        // }

        // var request = require('request');

        function getEarth() {
        let earth;
        // let request = require('request');

        return new Promise(function(resolve, reject) {
            request('https://www.reddit.com/r/EarthPorn.json', function(error, response, body) {
            earth = body;

            resolve(earth);
            });
        });
        }

        async function main() {
            let earth = await getEarth();
            console.log(earth);
        }

        main();




        // const reply3 = vm.getEarth();
        // // console.log(reply2);
        // console.log(reply3);

        


        //response contains api info, but with strange form
        // console.log(earthObj);
        
        //counter initialized
        var i = 0;
    
        //ng-click to trigger i ++,
    
        
        
    }]
}

angular
    .module("HomeBrewReddit")
    .component("earthPorn", earthPorn);

    // $.get("https://www.reddit.com/r/EarthPorn.json")
    //          .then((response) => {
    //            console.log(response);
    //            const reddit = response.data.children;
    //            for (let i = 0; i < 10; i++) {
    //                console.log(reddit);
    //              $("body").append(`
    //               <section class= "container">
    //                  <h3>${reddit[i].data.title}</h3>
    //                  <p>u/${reddit[i].data.author}</p>
    //                  <img class="user-pic" src= "${reddit[i].data.preview.images["0"].source.url}" >
    //                  <a href="${reddit[i].data.preview.images["0"].source.url}">>>> Link <<<</a>
    //                  </section>    
    //                  `)
                 
    //              }
        
    //     })