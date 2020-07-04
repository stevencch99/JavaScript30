# Target
Play with Dev Tools.
## Key points
### Interpolated
- Prefer the usage of ES6 backtick `` ` ``
```js
console.log('Hello I am a %s string!', 'Cat');
console.log(`Hello I am a ${dogs} string!`);
```

### Styled
```js
console.log('%c I am some great text', 'font-size: 20px; background: orange; text-shadow: 10px 10px 0 blue')

// warning!
console.warn('Ooooooops!');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per years');
```

### Testing
```js
const p = document.querySelector('p');
// The console.assert will only fire when the assertion false
console.assert(1 === 1, 'That is wrong!');
console.assert(1 === 2, 'That is wrong!');
console.assert(p.classList.contains('ouch'), 'That is wrong!');

// clearing
console.clear();
```

### Viewing DOM Elements
```js
console.log(p);
console.dir(p);
console.clear;
```

### Grouping together
```js
dogs.forEach(dog => {
  console.group(`${dog.name}`);
  // console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
})

// counting
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Wes');
console.count('Wes');
console.count('Steve');
```

### Timing
```js
console.time('fetching data');
fetch('https://api.github.com/users/stevencch99')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  })
```
## Additional Information
