const AWS = require('aws-sdk');
let documentClient = new AWS.DynamoDB.DocumentClient({'region': 'us-west-2'});

exports.handler = function(event, ctx, callback){
    const userID = event.userID;
    
    var params = {
        TableName : "EventLog",
        KeyConditionExpression: "#ur = :userId",
        ExpressionAttributeNames:{
            "#ur": "UserID"
        },
        ExpressionAttributeValues: {
            ":userId": userID
        }
    };
    
    documentClient.query(params, function(err, data) {
        if (err) {
            console.error("Unable to query. Error:", JSON.stringify(err, null, 2));
            callback(null, data);
        } else {
            console.log("Query succeeded.");
            data.Items.forEach(function(item) {
                console.log(" -", item.year + ": " + item.title);
            });
            callback(null, data);
        }
    });
};