# ie-array-find-polyfill
Polyfill to provide array.find on IE.

# Installation
To install the stable version:

```zsh
npm install ie-array-find-polyfill --save
```

# Use
```javascript
import "ie-array-find-polyfill";
```

# Example
```javascript
'use strict';
require('ie-array-find-polyfill');

const people = [
    {
        name: 'Joe Due',
        age: 35
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
```

```zsh
>node example.js

//RESULT
babies:  { name: 'Baby Due', age: 3 }
teems:  { name: 'Junior Manson', age: 20 }
adults:  { name: 'Joe Due', age: 35 }
classicGuys:  { name: 'Parker Manson', age: 75 }
```

