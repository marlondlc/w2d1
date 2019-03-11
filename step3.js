var https = require('https');



function getAndPrintHTML(options) {


    /* Add your code here */

    https.get(options, function (response) {
        var storageData = ""


        response.on('data', function (data) {
            storageData += data.toString();


        });


        response.on('end', function () {
            console.log(storageData);
        });



    })

}


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);

