'use strict';

// 9.104/111
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
  const openingHours = {
    [weekdays[3]]: {
      open: 12,
      close: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [weekdays[5]]: {
     open: 0, // Open 24 hours
     close: 24,
    },
 };

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
  
  const getCode = str => str.slice(0, 3).toUpperCase();//getCodeserve per togliere i numeri da non pubblicare
  
for (const flight of flights.split('+')) {
  const  [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(to)} (${time.replace(
    ':', 'h')})`.padStart(40);//padStar viene usata per mettere quanto vuoi larga la frase
  console.log(output);
}
  
  
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  // ES6 enhanced object literals
  openingHours,

  
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; // funziona anche senza mettere function
  },
  orderDelivery: function ({
     starterIndex = 1,
     mainIndex = 0,
     time = '20:00',
     address,
   }) {
    console.log(
      `Order received! ${this.starterMenu [starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },



orderPasta: function(ing1, ing2, ing3) {
  console.log(
    `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
},

orderPizza: function(mainIngredient, ...otherIngredients) {
  console.log(mainIngredient);
  console.log(otherIngredients);
}
};
const airline = 'TAP Air Portugal';

// 9.123
/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case 
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to 
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable 
 calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable 
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case 
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK �
*/
/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  //console.log(rows);
  
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    //console.log(second);
    
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});// per creare una finestra e un bottone e aggiungendo delle frasi scritte maiuscole e minuscole e segnali, verranno poi sistemate
*/






/*
//9.122
// split and join
console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
  const names = name.split(' ');
  const namesUpper = [];
  
  for(const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis')
capitalizeName('jonas schmedtmann')

//Padding
const message = 'Go to gate 23!';
console.log(message.padStart(20, '+'));//completare la scritta fino al num.20
console.log(' Sofia'.padStart(16, '❤️').padEnd(26, '❤️'));

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(465882100976378));
console.log(maskCreditCard(43378463864647384));
console.log(maskCreditCard('7632146486248628966965'));

// Repeat
const message2 = 'Bad waether...All Departues Delayed...-';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(5);
planesInLine(3);
planesInLine(12);
*/


/*
//9.121
console.log(airline.toLowerCase());//scrivere tutto minuscolo
console.log(airline.toUpperCase());///scrivere tutto maiuscolo

// fix capitalizazion in name
const passenger = 'sOfIa';
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
 passenger[0].toUpperCase() + passengerLower.slice(1);//per mettere la lettera 0 maiuscola e dalla lettera 1 fino alla fine minuscola
 console.log(passengerCorrect);

 // comparing emails
 const email = 'hello@jonas.io';
 const loginEmail = '  Hello@Jonas.Io \n';
 
 const lowerEmail = loginEmail.toLowerCase(); //per far diventare tutte le lettere minuscole
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceEU = '288,97€';
const priceUS = priceEU.replace('€', '$').replace(',', '.');//per sostituire
console.log(priceUS);

const announcement =
  'All passengers come to barding door 23. Bording door 23!';

console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate'));
 
//Booleans
const plane = 'Airbus A320neo';
console.log(plane.includes('A320'));
console.log(plane.includes('Boeing'));
console.log(plane.startsWith('Air'));

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW ARirbus fammily');
}

// Practice exercise
const checkBaggage = function(items){
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else { 
    console.log('Welcome aboard');
  }
};
checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');
*/


// 9.120
/*

const plane = 'A320';

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log('B373C'[4]);

console.log(airline.length);
console.log('B737C'.length);//length viene usato per sapere da quante lettere è composto

console.log(airline.indexOf('P'));//ti dice in che posizione si trova contando anche gli spazi
console.log(airline.lastIndexOf('P'));
console.log(airline.indexOf('Portugal'));//richiama l'ultima scritta

console.log(airline.slice(-2));//richiama le ultime 2 lettere
console.log(airline.slice(2, -1));//richiama dalla letera 2 fino alla penultima

console.log(airline.slice(4));//ti fa vedere tutta la scritta a partire dal numero 4
console.log(airline.slice(4, 9));// fa vedere la scritta dal numero 4 al numero 9

console.log(airline.slice(0, airline.indexOf(' ')));// vedere la scritta unita a partire dal n.0
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky');
};

checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(2));
*/

// 9.119
/*
Coding Challenge #3
Let's continue with our football betting app! This time, we have a map called 
'gameEvents' (see below) with a log of the events that happened during the 
game. The values are the events themselves, and the keys are the minutes in which 
each event happened (a football game has 90 minutes plus some extra time).
Your tasks:
1. Create an array 'events' of the different game events that happened (no 
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on 
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking 
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽ GOAL
GOOD LUCK �
*/

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
  ]);
  /*
  //1.
  const events = [...new Set(gameEvents.values())];
  console.log(events);
  
  //2.
  
  gameEvents.delete(64);
  
  // console.log(gameEvents);
  
  // 3.
  console.log(
    `An event happened, on average, every ${90 / gameEvents.size} minutes`
  );
  const time = [...gameEvents.keys()].pop();
  console.log(time);
  console.log(
    `An event happened, on average, every ${time / gameEvents.size} minutes`
  );
  // 4.
  for(const [min, event] of gameEvents) {
    const half = min <= 45 ? 'FIRST' : 'SECOND';
    console.log(`[${half} HALF] ${min}: ${event}`);
  }
  */
 
  
/*
  
  gameEvents.map((item, index) => {
    
    if (!myArr.includes(gameEvents.get(index))) {
      myArr.push(gameEvents.get(index));
    }   
  })
  
*/
  

  

/*
//9.117
const question = new Map([
  ['question', 'What is the best programing language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct'],
  [false, 'Try again'],
]);
console.log(question);

// Converter object to map
console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//Quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Convert map to array
console.log(...question);//fa vedere se la risposta è corretta
console.log(question.entries());
console.log([...question.keys()]);
console.log([...question.values()]);
*/


/*
// 9.116
const rest = new Map();
rest.set('name', 'Classic Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));// nome=>indirizzo=>2.indirizzo

rest
  .set('categories', ['Italian', 'Pizzeria'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');//usando solo questo non viene visualizzato se non l'indirizzo e il nome
  
  console.log(rest.get('name'));
  console.log(rest.get(true));
  console.log(rest.get(1));
  console.log(rest.get(false));
  
  const time = 21;
  console.log(rest.get(time > rest.get('open') && time < rest.get('close')));//calcolo per vedere se a quell'ore è aperto

console.log(rest.has('categories'));
rest.delete(2);
//rest.clear(); //per azzerare gli elementi

const arr = [1, 2];
rest.set(arr, 'Test');
rest.set(document.querySelector('h1'), 'Heading');//mettendo la freccia su h1 ti evidenzia la scrittura fatta con h1 sul web
console.log(rest);//mette tutti gli elementi ed elimina il numero 2
console.log(rest.size);

console.log(rest.get(arr));
*/


/*
//9.115
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza', 
  'Risotto', 
  'Pasta', 
  'Pizza'
]);
console.log(ordersSet);

console.log(new Set('SOFIA🥰'));

console.log(ordersSet.size);//da quanti elementi è composto
console.log(ordersSet.has('Pizza'));//se è nella lista
console.log(ordersSet.has('Bread'));
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
ordersSet.delete('Risotto');//serve per eliminare
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

//Wxample
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);//mettere in ordine
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size  //da quanti elementi è composto
);

console.log(new Set('sofiaabouabdillah').size); //da quante lettere diverse è composto
*/






// 9.114
/*
Coding Challenge #2
Let's continue with our football betting app! Keep using the 'game' variable from 
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names �
4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:
{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK �
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Bazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
// 1.
for (const [i, player] of game.scored.entries())
console.log(`Goal ${i + 1}: ${player}`);

// 2.
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  console.log(team, odd);
}

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
*/


/*
// 9.113
// Property NAMES
const properties = Object.keys(openingHours);
console.log(properties);


console.log(`We are open on ${properties.length} days`);

let openStr = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr);

// Property VALUES
const values = Object.values(openingHours);
console.log(values);

// Entire object
const entries = Object.entries(openingHours);
// console.log(entries);

// [key, value]
for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

for (const day of Object.keys(openingHours)) {
  console.log(day); //fa vedere i giorni disponibili
}
*/








/*
// 9.112
if (restaurant.openingHours && restaurant.openingHours.fri)
  console.log(restaurant.openingHours.fri.open);
  
if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open);
  
// WITH optional chaining
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

// Arrays
const users = [
  {name: 'Jonas', email: 'hello@jonas.io'}];
  console.log(users[0]?.name ?? 'User array empty');
  console.log(users[0]?.email ?? 'User array empty');
  
//const user = [];


if(users.length > 0) console.log(users[0]?.name);
else console.log('user array empty');
*/



/*
// 9.110
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

for (const item of menu.entries()) {
  console.log(item);
}

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu.entries()]);
*/

//9.109
/*
Coding Challenge #1
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on 
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and 
'players2')
2. The first player in any player array is the goalkeeper and the others are field 
players. For Bayern Munich (team 1) create one variable ('gk') with the 
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 
field players
3. Create an array 'allPlayers' containing all players of both teams (22 
players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a 
new array ('players1Final') containing all the original team1 players plus 
'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 
'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player 
names (not an array) and prints each of them to the console, along with the 
number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which 
team is more likely to win, without using an if/else statement or the ternary 
operator.
Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. 
Then, call the function again with players from game.scored
GOOD LUCK �
*/
/*
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Bazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
*/
/*
// 1. 
const [players1, players2] = game.players;
console.log(players1, players2); //dividere i giocatori in 2 squadre

// 2.
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);// mettere il portiere fuori dal array

// 3.
const allPlayers = [...players1, ...players2];
console.log(allPlayers); //unire le 2 squadre

// 4.
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];
console.log(players1Final);//aggiungere giocatori all array

// 5.
const {odds: {team1, x: draw, team2}} = game;
console.log(team1, draw, team2);

// 6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimich');
// printGoals('Davies', 'Muller');
 printGoals(...game.scored);

 // 7.
 team1 > team2 && console.log('Team 1 is more likely to win');
 

console.log(game.players);
console.log(game.team1);
console.log(game.scored);
*/




/*
//9.108
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);
*/





/*
//9.107
console.log('----OR----');
// Use ANY data type, return ANY data type, short-circuiting
console.log(3 || 'Jonas');//prende il primo se non è booleano
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

restaurant.numGuests = 0;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);

const guests2 = restaurant.numGuests || 10;
console.log(guests2);

console.log('----AND----');
console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

console.log('Hello' && 23 && null && 'Jonas');

// Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('funghi', 'spinaci');
}

restaurant.orderPizza && restaurant.orderPizza('funghi', 'spinaci');
*/

//9.106
/*
// 1) Destructuring

// SPREAD, because on RIGHT side of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu, 
  ...restaurant.starterMenu
];
console.log(pizza, risotto, otherFood);


// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

// 2) Functions
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3); //add prende un elemento e lo aggiunge ad array
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('salsa', 'formaggio', 'tonno', 'olive');
restaurant.orderPizza('salsa');
*/



//9.105
/*
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);
console.log(1, 2, 7, 8, 9);

//aggiungere al menu
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

// copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str= 'Jonas';
const letters = [...str, '', 's.'];
console.log(letters);
console.log(...str);

//real world example
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt('Ingredient 2?'),
  prompt('Ingredient 3?'),
];
console.log(ingredients);

//per registrare una frase completa dei messaggi prompt
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//objects (fa vedere chi ha fondato il ristorante e la sua lavorazione)
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' };
console.log(newRestaurant);

const restaurantCopy = {...restaurant };
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);
*/

//9.104
/*
//fare il richiamo della funzione 
restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address:'Via del Sole, 21',
  starterIndex:1,
});

const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = {a: 23, b: 7, c: 14};
({ a, b } = obj);
console.log(a, b);

// nested objects
const {
   fri: {open: o, close: c},
}  = openingHours;
console.log(o, c);
*/

//9.103
/*
// destructuring arrays
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//usare i dati del ristorante
let [main, , secondary] = restaurant.categories; //aggiungere un'altra virgola significa contare il secondo dopo la virgola (first, , second)
console.log(main, secondary);

//switching variable
// const temp = main;
// main = secondary; 
// secondary = temp;
// console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

// receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
const [i, ,[j, k]] = nested; //viene usata per far saltare un numero tipo il 4
console.log(i, j, k);

// default values
const [p = 1, q = 1, r = 1] = [8, 9]; // viene messo al posto di ricevere undefined
console.log(p, q, r);
*/