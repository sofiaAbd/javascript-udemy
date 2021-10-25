'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//11.145
const displayMovements = function(movements) {
  containerMovements.innerHTML = '';
  // .textContent = 0
  
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov}</div>
      </div>   
      `; //presa da html 53/57
      
      containerMovements.insertAdjacentHTML('afterbegin', html); //per aggiungere righe di movimenti
      
  });
};
displayMovements(account1.movements);

//console.log(containerMovements.innerHTML);//per far vedere su console i movimenti

//11.149
/*
const createUsernames = function (user) {
  const username = user 
    .toLowerCase()
    .split(' ')//fino qui mette i nomi separati stringa minuscoli
    .map(name => name[0])
    .join('');//iniziali uniti 
  return username;
  }; //senza .join iniziali dei nomi separati con stringa
  
console.log(createUsernames('Steven Thomas Williams'));
*/


//11.151
const calcDisplayBalance = function(movements) {
  const balance = movements.reduce((acc, muv) => acc + muv, 0);
  labelBalance.textContent = `${balance} €`;
 };
 calcDisplayBalance(account1.movements); //per far vedere nell'immagine dell app bancari il saldo attuale
 
 const calcDisplaySummary = function(movements) {
    const incomes = movements
      .filter(mov => mov >0)
      .reduce((acc, mov) => acc + mov, 0);
    labelBalance
  };
 calcDisplayBalance(account1.movements);

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner 
    .toLowerCase()
    .split(' ')//fino qui mette i nomi separati stringa minuscoli
    .map(name => name[0])
    .join('');//iniziali uniti 
  });
}; //senza .join iniziali dei nomi separati con stringa
createUsernames(accounts);
console.log(accounts);


//11.150
/*
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor); //fa vedere solo il deposito

const withdrawalsnew = movements.filter(function (mov) {
  return mov < 0;
});
console.log(withdrawalsnew);//è uguale a questa sotto fa vedere solo i prelievi
const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
*/

//11.151
/*
console.log(movements);

// accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i + 1}: ${acc}`);//aggiungendo questo console fa vedere le operazioni una dopo l'altra con stringa
  return acc + cur;
}, 0);//viene messo zero se si parte da zero 
console.log(balance);// saldo rimasto

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);//stesso calcolo fatto prima per il saldo

const balance3 = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance3);//stesso saldo

//Valore massimo
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

//Valore minimo
const min = movements.reduce((acc, mov) => {
  if (acc < mov) return acc;
  else return mov;
}, movements[0]);
console.log(min);
*/



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////

//11.141
/*
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(1, -2));
console.log([...arr]);//per richiamare tutte le array
console.log(arr.slice());//come ...arr

// SPLICE
// console.log(arr.splice(2));
// console.log(arr);//richiama le array tolti prima
arr.splice(-1);//elimina l'ultimo
console.log(arr);
arr.splice(1, 2);//elimina numero 1 e 2
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); //viene richiamata con contrario
console.log(arr2);//richiama lo stesso array inverso

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);//richiama il primo e secondo array
console.log([...arr, ...arr2]);// stessa cosa di prima

// JOIN
console.log(letters.join(' - '));//stringa che separa l' array chiamata con il segno che si mette
*/


//11.142
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for (const movement of movements) {
for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---SECONDO---'); //stesso calcolo di quello precedente
movements.forEach(function (mov, i) {
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
*/


//11.143
/*
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

// Set
const currencieUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currencieUnique);//non fa vedere i nomi doppi
currencieUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});
*/

//11.146
/*
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners 
about their dog's age, and stored the data into an array (one array for each). For 
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years 
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages 
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have 
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat 
ages from that copied array (because it's a bad practice to mutate function 
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far �
GOOD LUCK �
*/
/*
const checkDogs = function(dogsJulia, dogsKate){
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);
  
  
  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy is ${dog} years old`); 
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
console.log('-----secondo-----');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

//11.148
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });
const movementsUSD = movements.map(mov => mov * eurToUsd);//uguale a quello prima ma abbreviato
console.log(movements);
console.log(movementsUSD);


const movementsUSDfor = [];
for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

const movementsDescriptions = movements.map(
  (mov, i, arr) =>
  `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
    mov
  )}`
);
console.log(movementsDescriptions);
*/

//11.152
/*
Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert 
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's 
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is 
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, 
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as 
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know 
from other challenges how we calculate averages �)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]
GOOD LUCK �
*/

/*
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));//fino a 2 anni viene moltiplicato per 2, maggiore di 2 =16+età*4
  const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges);
  console.log(adults);
  
  const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;//fa vedere solo i cani adulti
  //const average = adults.reduce((acc, age, i, arr) => acc + age / arr.length, 0); //stessa operazione di prima
  
  return average;
};
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);
*/

//11.153

const eurToUsd = 1.1;
console.log(movements);
//PIPELINE
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    // console.log(arr);
    return mov * eurToUsd;
  })
  //.map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);

/*const totalDepositsUSD = movements
  .filter(mov => mov < 0)
  .map((mov, i, arr) => {
    console.log(arr);
    return mov * eurToUsd
  })
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositsUSD);*/ //per vedere i prelievi