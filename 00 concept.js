*JSX: https://babeljs.io/

*Class
*Function
*Inheritance

*{ }: for dynamic entry

*Spread: Used to split up array elements (OR) object properties.

const newArray = [...oldArray, 1, 2, 3] # copyng the content from oldArray to newArray with some new elements
const newObj = {...oldObj, newProp:5} # similarly with objects

*Rest: Used to merge a list of function arguments into an array

function sortArgs(...args){   # You can add any number of arguments and 'rest' converts them into an array.
	return args.sort()
}

*Destructuring: Easily extract array elements or object properties and store them in variables.

*props: for adding properties and it should be passed as argument in a function.
{props.field_name}: for fields within the tags
{props.children}: for additional text between tags

*state: providing values or peoperties within the class 
*this: points to the current class

*setState: provides us to update the state and notify it that a perticular property is updated