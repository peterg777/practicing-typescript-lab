console.log('Peters ks lab');

let myName : string = 'Peter';
let myLastName: string = 'Guzzardo';
let age: number = 19;
console.log(myName + ' ' + myLastName);

// create const w/number of states
const numStates: number = 50;

// compute 5 + 4 & store in variable
let sum = 5 + 4;

// write sayHello function that displays alert
function sayHello(): void {
	alert('Hello World!');
}

// call sayHello function
sayHello();

// write checkAge function that takes two arguments (name, age)
function checkAge(myName: string, age: number) {
	if (age < 21) {
		alert(`Sorry ${myName}, you aren't old enough to view this page!`);
	}
}
interface IFriend{
    name: string;
    age: number;
}
//  crate array 4 friends
const friends: IFriend[] = [
	{name: 'charles', age: 21}, 
	{name: 'abby', age: 27}, 
	{name: 'james', age: 18}, 
    {name: 'john', age:17},
];
// call function 4 times
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

// use loop to call the checkAge function for each object in the array
/*for (let i = 0; i < newArr.length; i++) {
	console.log(checkAge(newArr[i].name, newArr[i].age));
} */

for (const friend of friends) {
	console.log(checkAge(friend.name, friend.age));
}
// create array of your favorite vegetable
const favVeggies: string[] = ['Potatoes', 'Onions', 'Carrots'];

// loop through favVeggies array & display to console
/* for (let i = 0; i < favVeggies.length; i++) {
	console.log(favVeggies[i]);
} */

favVeggies.forEach(veggie => console.log(veggie));

// create a function called getLength that takes any word as an argument
function getLength (drums: string) {
	return drums.length;
}

// call the getLength function
const result: number = getLength('Hello World');

// if number is even display 'The world is nice and even!
// if number is odd display 'The world is an odd place'
if (result % 2 === 0) {
	console.log('The world is nice and even!');
} else {
	console.log('The world is an odd place.');
}