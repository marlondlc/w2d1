var https = require('https');


function getAndPrintHTML() {

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step2.html'
    };

    /* Add your code here */

    https.get(requestOptions, function (response) {
        var storageData = ""


        response.on('data', function (data) {
            storageData += data.toString();


        });


        response.on('end', function () {
            console.log(storageData);
        });



    })




}

getAndPrintHTML();

//https.request( options, callback ).end();