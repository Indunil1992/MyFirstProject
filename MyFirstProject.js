let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    debugger;
    try {
        let data = await s3.listObjects({
            Bucket: "cf-templates-1oea0dbk84gyv-us-west-2",
            MaxKeys: 10
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed 1" };
};