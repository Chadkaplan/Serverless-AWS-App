const AWS = require("aws-sdk");
require('dotenv').config()   
    // Create DynamoDB service object.
    var ddb = new AWS.DynamoDB({ apiVersion: "2012-08-10" });
    
    const params = {
      TableName: "InvoiceTable",
    };
    
    ddb.scan(params, function (err, data) {
      if (err) {
        console.log("Error", err);
        return
      }
        console.log("Success", data);
        data.Items.forEach(function (element) {
          console.log(
              element
          );
        });
    });





//     const AWS = require("aws-sdk");
// const docClient = new AWS.DynamoDB.DocumentClient({region : 'us-east-1'});

// console.log('Loading function');


// exports.handler = function (event, context, callback) {
//     let scanningParameters = {
//         TableName : 'InvoiceTable'
//     };
    
//     docClient.scan(scanningParameters, function(err,data){
//         console.log("Scanning")
//         if (err){
//             callback(err,null);
//         } else{
//             callback(null, data.Items)
//         }
//     });
// }