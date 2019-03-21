'use strict';

module.exports.sendData = (event, context, done) => {
  const todos = [
    {
      id: 1,
      name: 'clean'
    },
    {
      id: 2,
      name: 'something else productive'
    }
  ];
  done(null, {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({ message: 'hello' })
  });
  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
