'use strict';

//require('ie-array-find-polyfill');
require('./index.js');

const people = [
    {
        name: 'Joe Due',
        age: 35
    },
    {
        name: 'Peter Belt',
        age: 30
    },
    {
        name: 'Parker Manson',
        age: 75
    },
    {
        name: 'Junior Manson',
        age: 20
    },
    {
        name: 'Mary Due Manson',
        age: 21
    },
    {
        name: 'Baby Due',
        age: 3
    },
];

const babies = people.find(x => x.age <= 8);
const teems = people.find(x => x.age > 8 && x.age <= 20);
const adults = people.find(x => x.age > 20 && x.age <= 50);
const classicGuys = people.find(x => x.age > 50 && x.age < 100);

console.log('babies: ', babies);
console.log('teems: ', teems);
console.log('adults: ', adults);
console.log('classicGuys: ', classicGuys);
