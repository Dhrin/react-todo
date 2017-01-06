// function add (a, b) {
// 	return a + b;
// }

// console.log(add(3, 1));

// var toAdd = [9, 6, 5];

// console.log(add(...toAdd));

// var groupA = ['jen', 'Cory'];
// var groupB = ['Vikram'];

// var final = [3, ...groupA, ...groupB];

// console.log(final);

var person = ['Andrew', 25];

var personTwo = ['jen', 28];

function greeting (name, age) {
	console.log('Hi ' + name + ', you are ' + age);
}

greeting(...person);
greeting(...personTwo);

var name = ['Mike', 'Ben'];
var final = ['Andrew', ...name];

final.forEach(function (name) {
	console.log('Hi ' + name);
});

