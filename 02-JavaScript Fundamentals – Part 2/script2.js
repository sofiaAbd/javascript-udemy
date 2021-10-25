//3.32
/*
'use strict';

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('I can drive :D');
*/

//3.33
/*
function logger() {
    console.log('My name is Jonas');
}

// calling / running / invoking function
logger(23);
logger();
logger();

function fruitProcessor(apples, oranges) {
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');
*/

//3.34
//function declaration
/*
function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const age2 = calcAge2(1998);

console.log(age1, age2);
*/

//2.35
/*
// Arrow function
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName) => {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));
*/

//3.36
/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}
function cutFruitPieces1(fruit1) {
    return fruit1 * 5;
}
function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces1(oranges);

    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

//3.37
/*
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}
const yearsUntilRetirement = function (birthYeah, firstName) {
    const age = calcAge(birthYeah);
    const retirement = 65 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    }   else  {
        console.log(`${firstName} has already retired in ${retirement} years`);
        return '🎉';
    }
    //return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1950, 'Mike'));
*/

//3.38
/*
Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new 
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so 
one average score per team).
A team only wins if it has at least double the average score of the other team. 
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner 
to the console, together with the victory points, according to the rule above. 
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and 
Data 2
5. Ignore draws this time
Test data:
§ Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
§ Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
§ To calculate average of 3 values, add them all together and divide by 3
§ To check if number A is at least double number B, check for A >= 2 * B. 
Apply this to the team's average scores �
GOOD LUCK �
*/
/*
const calcAverage = (a, b , c) => (a + b + c)/ 3;
console.log(calcAverage(3, 4, 5));

//TEST 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function (avgDolphins, avgKoalas)
{
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    }   else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolphins})`);
    }   else {
        console.log('No team wins...');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

checkWinner(576, 111);


// TEST 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
*/

//3.39
/*
const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years1 = new Array(1991, 1984, 2008, 2020);


//1991 -> years1[0] 
//1984 -> years1[1] years1[years1.lenght - 3]
//2008 -> years1[2] 
//2020 -> years1[3] 


console.log(years1);
console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas);
console.log(jonas.length);

//EXERCISE
const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}
const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);
*/

//3.40
/*
const friends = ['Michael', 'Steven', 'Peter'];
//aggiungere elementi
const newLength = friends.push('Jay'); //aggiungere a gli amici
console.log(friends);
console.log(newLength);

friends.unshift('John'); //mettere John come primo
console.log(friends);

//rimuovere elementi
friends.pop(); //rimuove l'ultimo elemento

//restituire l'elemento tolto
const popped = friends.pop();
console.log(popped);
console.log(friends);

//per togliere il primo elemento
friends.shift();//first
console.log(friends);

console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob'));
console.log(friends.indexOf('Michael'));

friends.push(23);
console.log(friends.includes('Steven'));//per chiedese se l'elemento è incluso oppure no
console.log(friends.includes('Bob'));
console.log(friends.includes(23)); //se metto '23' uscirà falso

if (friends.includes('Steven')); {
    console.log('You have a friend called Steven');
} 
*/

//3.41
/*
Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of 
the bill if the bill value is between 50 and 300, and if the value is different, the tip is 
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns 
the corresponding tip, calculated based on the rules above (you can check out 
the code from first tip calculator challenge if you need to). Use the function 
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data 
below
3. Create an array 'tips' containing the tip value for each bill, calculated from 
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can 
actually be the returned value of a function! So you can just call a function as array 
values (so don't store the tip values in separate variables first, but right in the new 
array) �
GOOD LUCK �
*/
/*
const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = (bills[0] + tips[0]);
console.log(bills, tips, totals);
*/

//3.42
/*
const jonasArray = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];

const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas);
console.log(jonasArray);
console.log(jonas.lastName);
console.log(jonas['lastName']);

const nameKey = 'Name';
console.log(jonas['first' + nameKey]);
console.log(jonas['last' + nameKey]);

const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');
//console.log(jonas[interestedIn]);

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
}   else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends')
}
 jonas.location = 'Portugal';
 jonas['twitter'] = '@jonasschmedtman';
 console.log(jonas);

 console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`);
*/
//3.44 METODO OGGETTIVO
/*
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmeann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    
    //calcAge: function () {
    //    console.log(this);
    //    return 2037 - this.birthYeah;
    //}
    
    calcAge: function () {
        this.age = 2037 - this.birthYeah;
        return this.age;
    },

    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
    }
};
console.log(jonas.calcAge());
//console.log(`${jonas.firstName} is a ${jonas.age}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`);
console.log(jonas.getSummary());
*/

//3.45 calcolo di BMI
/*
Coding Challenge #3
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to 
implement the calculations! Remember: BMI = mass / height ** 2 = mass 
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and 
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same 
method on both objects). Store the BMI value to a property, and also return it 
from the method
3. Log to the console who has the higher BMI, together with the full name and the 
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m 
tall.
GOOD LUCK �
*/
/*
const marks = {
    firstName: 'marks',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2
        return this.bmi;
    }
};
const john = {
    firstName: 'john',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / this.height ** 2
        return this.bmi;
    }
};

marks.calcBMI();
john.calcBMI();
console.log(marks.bmi, john.bmi);

if (marks.bmi > john.bmi) {
    console.log(`${marks.firstName} is BMI (${marks.bmi}) is higher than ${john.firstName} is BMI (${john.bmi})`)
}   else if (john.bmi > marks.bmi) {
    console.log(`${john.firstName} is BMI (${john.bmi}) is higher than ${marks.firstName} is BMI (${marks.bmi})`)
}
*/

//3.46 for loop keeps running while condition is TRUE
/*
for (let rep =1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋🏼‍♀️`);
}
for (let rep =1; rep <= 20; rep = rep + 1) {
    console.log('lifting');
}
*/

//3.47
/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];
const types = [];

for (let i = 0; i < 3; i++) {
    console.log(jonas[i]);
}

for (let i = 0; i < jonas.length; i++) {
    //reading from jonas array
    console.log(jonas[i], typeof jonas[i]);

    //filling type array
   // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
}
console.log(types);

const years = [1991, 2007, 1969, 2020];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages);

// continue and break
console.log('---ONLY STRINGS---')
for (let i = 0; i < jonas.length; i++) {
    if (typeof jonas[i] !== 'string') continue;

    console.log(jonas[i], typeof jonas[i]);
}
*/

//3.48
/*
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven']
];
for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

// elenco esercici fisici
for (let exercise = 1; exercise < 4; exercise++) {
    console.log(exercise, `----Starting exercise ${exercise}`);

for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
  }
}
*/


//3.49
/*
for (let rep = 1; rep <=10; rep++) { 
    console.log (`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
    console.log (`WHILE:Lifting weights repetition ${rep}`); rep++;
}
//NUMERO CASUALE
let dice = Math.trunc (Math.random() *6) +1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() *6) + 1;
    if (dice === 6) console.log('Loop is about to end...');
}
*/

//3.50
/*
Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate 
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the 
tips and totals arrays �
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as 
an argument. This function calculates the average of all numbers in the given 
array. This is a difficult challenge (we haven't done this before)! Here is how to 
solve it:
4.1. First, you will need to add up all values in the array. To do the addition, 
start by creating a variable 'sum' that starts at 0. Then loop over the 
array using a for loop. In each iteration, add the current value to the 
'sum' variable. This way, by the end of the loop, you have all values 
added together
4.2. To calculate the average, divide the sum you calculated before by the 
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
GOOD LUCK �
*/
/*
// 1.
const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
} 
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

//exercise n.4
const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        //sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2, 3, 6]));
console.log(calcAverage(totals));//calcolo medio del totale
console.log(calcAverage(tips));// calcolo medio di tips
console.log(calcAverage(bills));//calcolo medio delle bollette
*/