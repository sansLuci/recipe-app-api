class Hello{
  constructor(){
    this.messagec = 'Hello';
  }

  hello(){
    console.log(this.messagec)
    console.log('Hello');
  }
}

class Person extends Hello{
  constructor(){
    super();
    this.name = 'Max';
    this.messagec = 'Hi';
  }

  name(){
    console.log(this.name)
  }
}

const person = new Person();
person.name();
person.hello();