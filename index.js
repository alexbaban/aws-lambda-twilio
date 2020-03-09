exports.handler = (event, context, callback) => {

    // Your Account SID from www.twilio.com/console
    // See http://twil.io/secure for important security information
    const accountSid = process.env.ACCOUNT_SID;

    // Your Auth Token from www.twilio.com/console 
    // See http://twil.io/secure for important security information
    const authToken = process.env.AUTH_TOKEN;

    // Import Twilio's Node Helper library
    // Create an authenticated Twilio Client instance
    const client = require('twilio')(accountSid, authToken);

    // Send a text message
    client.messages.create({
        body: 'Hello from Lambda!',
        to: '+12345678901',  // your phone number
        from: '+12345678901' // a valid Twilio number
    })
        .then((message) => {
            // Success, return message SID
            callback(null, message.sid);
        })
        .catch((e) => {
                // Error, return error object
            callback(Error(e));
        });

};