// Spread

// Spread with an array
const num = [1,2,3,4]
const nums = [...num,5,6]

console.log(nums)

// Spread with object
const person= {
  name = 'Herold'
};

const newPerson = {
  ...person,
  age = 28
}

console.log(newPerson);

// Rest

const func = (...args) => {
	return args.filter(el => el === 1); 
	// Since it converts the argument in an array so we can use 'filter()' which checks every element
	// '===' is the operator for checking
}

console.log(func(1,2,3));