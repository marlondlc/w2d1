var https = require('https');



function getAndPrintHTMLChunks() {

    var requestOptions = {
        host: 'sytantris.github.io',
        path: '/http-examples/step1.html'
    };

    /* Add your code here */

    https.get(requestOptions, function (response) {

        response.on('data', function (data) {
            console.log(data.toString() + "\n");

        });

        /*This function should console.log each 
        chunk of data as it is received, 
        concatenated with a newline character ('\n') 
        so you can visualize each chunk. */


        // set encoding of received data to UTF-8
        // response.setEncoding('utf8');


        //--------
        // var callback = function (response) {
        //     console.log('In response handler callback!');

        //     response.on('data', function (chunk) {
        //         console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
        //         console.log(chunk.toString());
        //     });
        // }


    })
};

getAndPrintHTMLChunks()


