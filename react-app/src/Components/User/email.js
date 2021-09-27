var axios = require("axios").default;

var options = {
  method: 'POST',
  url: 'https://rapidprod-sendgrid-v1.p.rapidapi.com/mail/send',
  headers: {
    'content-type': 'application/json',
    'x-rapidapi-host': 'rapidprod-sendgrid-v1.p.rapidapi.com',
    'x-rapidapi-key': 'afb1da8c2emsh1f81bd85d58e4b7p17cd94jsnf05b0463293c'
  },
  data: {
    personalizations: [{to: [{email: 'ankurpraveer@gmail.com'}], subject: 'Hello, World!'}],
    from: {email: 'from_address@example.com'},
    content: [{type: 'text/plain', value: 'Hello, World!'}]
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});