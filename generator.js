
function generator(length, type = 'all') {
	const small = 'abcdefghijklmnopqrstuvwxyz';
	const capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const numbers = '0123456789';
	const symbols = '!@#$%^&*()';
	let pool; //as in a pool of letters to draw from
	let password = '';
	
	switch(type) {
		case 'all':
			pool = small.concat(capital).concat(numbers).concat(symbols);
			break;
		case 'l':
			pool = small.concat(capital);
			break;
		case 'ln':
			pool = small.concat(capital).concat(numbers);
			break;
		case 'n':
			pool = numbers;
			break;
		case 's':
			pool = symbols;
			break;
		default:
			pool = small.concat(capital).concat(numbers).concat(symbols);
	}

	for(let i = 0; i < length; i++) {
		password += pool[Math.floor(Math.random() * pool.length)];
	}

	return password;
}

let type = 'all'
let length = 20;

function generate() {
	const password = generator(length, type);
	document.querySelector(".password").innerText = password;
}

function info() {
	console.log(
`password generation uses 2 variables:

length - a number to determine the length of the password

type - one of the following strings
	'all' - lower & upper case letters, digits and numbers will be used
	'l' - only letters will be used
	'ln' - only letters and numbers will be used
	'n' - only numbers will be used
	's' - only symbols will be used

to have a password of length 16 that uses only letters and numbers
type in the console:
length = 16;
type = 'ln';

then click on the Generate button
`
)
}

console.log(`Run 'info()' to get more details`);