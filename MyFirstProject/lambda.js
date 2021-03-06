let AWS = require('aws-sdk');
const ses = new AWS.SES();
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {
    s3.listObjects({
        'Bucket': 'com.sigma.test.263248768798.asankha.us-east-1',
        'MaxKeys': 10,
        'Prefix': '1'
    }).promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
                Contents: [
                    {
                       ETag: "\"70ee1738b6b21e2c8a43f3a5ab0eee71\"",
                       Key: "example1.jpg",
                       LastModified: "<Date Representation>",
                       Owner: {
                          DisplayName: "myname",
                          ID: "12345example25102679df27bb0ae12b3f85be6f290b936c4393484be31bebcc"
                       },
                       Size: 11,
                       StorageClass: "STANDARD"
                    },
                    // {...}
                ]
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });

    ses.sendEmail({
        Destination: {
            ToAddresses: ['achal.rvce@gmail.com'],
            CcAddresses: [],
            BccAddresses: []
        },
        Message: {
            Body: {
                Text: {
                    Data: ''
                }
            },
            Subject: {
                Data: 'test'
            }
        },
        Source: 'achal.rvce@gmail.com',
    }, function (err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else console.log(data);           // successful response
    });




    callback(null, { "message": "Successfully executed" });
}