//Variables coding

/*var name='John';
console.log(name);

var lastName = 'Smith';
console.log(lastName);

var age = 26;
console.log(age);

var fullAge = false;
console.log(fullAge);
*/

//Lecture variables 2
/*
var name='John';
var age=26;

//console.log(name + " " + age);
//console.log(age + " " + age);
//console.log(age + age);

var job, isMarried;

//console.log(job);

job = 'teacher';
isMarried = false;

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

age = 'thirsty six';
job = 'driver';

console.log(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');

//var lastName = prompt('What is the last name?');
//console.log(lastName);

alert(name + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried + '.');
*/

/*var now = 2016;
var birthYear = now - 26;
birthYear = 2016 - 26 * 2;

console.log(birthYear);

var ageJohn = 30;
var ageMark = 30;

ageJohn = ageMark = (3 + 5) * 4 - 6;

ageJohn++;
ageMark *= 2;
ageMark = ageMark * 2;

console.log(ageJohn);
console.log(ageMark);
*/

///////////////////////////////Lecture: if/else statements
/*
var name = 'John';
var age = 26;
var isMarried = 'yes';

if (isMarried === 'yes') {
    console.log(name + ' is Married!');   
} else {
    console.log(name + ' will hopefully marry soon :)');
}


isMarried = false;
*/
/*
if (isMarried) {
    console.log('YES!');
} else {
    console.log('NO!')
};
*/
/*
if (isMarried) {
    console.log('YES!');
}

if (23 === "23") {
    console.log('Something to print.....');
}
*/

//////////Lecture on boolena logic and switch

var age = 35;

if (age < 20) {
    console.log('John is a teenager');
} else if (age >= 20 && age < 30) {
    console.log('John is a young man.')
} else {
    console.log('John is a man.')
}

//switch statement is better at this

var job = 'teacher';
job = prompt('What does John do?');

switch (job) {
    case 'teacher':
        console.log('John teaches kids.');
        break;
    case 'driver':
        console.log('John drives a cab in Lisbon');
        break;
    case 'cop':
        console.log('John helps fight crime.');
        break;
    default:
        console.log('John does something else.')
        
}