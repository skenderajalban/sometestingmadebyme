t sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
	    to: 'skenderajalban19@gmail.com',
	    from: 'sender@fbmail.com',
	    subject: 'Hello world',
	    text: 'Hello plain world!',
	    html: '<p>Hello HTML world!</p>',
};

sgMail
    .send(msg)
    .then(() => console.log('Mail sent successfully'))
    .catch(error => console.error(error.toString()));
