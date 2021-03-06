const  re = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/

export default (emails) => {
	const invalidEmails = emails
	.split(',')
	.map(email => email.trim())
	.filter(email => re.test(email)===false)
	if(invalidEmails.length){
		return `These emails are invalid: ${invalidEmails}`;
	}
	return;
};