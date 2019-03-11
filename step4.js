var https = require('https');

function getHTML(options, callback) {

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
function printHTML(html) {
    console.log(html);
}


var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);