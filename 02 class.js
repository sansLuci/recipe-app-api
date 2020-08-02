class Person {
	constructor() {
		this.name = 'Max';
	}

	func() {
		console.log(this.name);
	}
}

const person = new Person();
person.func();

class Hello{
	name = 'Max';

	const funct = () => {
		console.log(this.name);
	}
}

const hello = new Hello();
Hello.funct();
