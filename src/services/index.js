// test function in, may need further assistance from John to set up the Azure Portal

module.exports = async () => {
  context.log('This is a test azure function written in JS');

  const name = (req.query.name || (req.body && req.body.name));

  const responseMessage = name ? 'Azure function is working' + name : 'Something is amiss with the Azure function';

  context.res = {
    body: responseMessage
  };

};