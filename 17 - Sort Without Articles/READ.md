## Target
To sort an array of band's names while ignore the article: 'The', 'An' and 'A' which infront of the band's name.

Break down into steps:
1. Exclude the article from bands' name
  - e.g. for 'An Old Dog', sorting by 'Old Dog' instead of 'An Old Dog'
2. Insert html list element into the ul #bands
  - Array.prototype.sort() receives a callback function, which is able to deal with sept 1 while sorting.
3. The list elements inserted should remain the same as before.

## Key points

### Sorting with short hands
Combine the short hand of **arrow function** and **directly return value** to write a more concise and elegant code.
  - Refactoring of Array sorting, Step 1.
    ```js
    const sortedBands = bands.sort(function(a, b) {
      if (stript(a) > stript(b)) {
        return 1;
      } else {
        return -1;
      }
    });
    ```

  - Refactoring of Array sorting, Step 2.
    ```js
    const sortedBands = bands.sort((a, b) => {
      return stript(a) > stript(b) ? 1 : -1;
    });
    ```

  - Refactoring of Array sorting, Step 3.
  ```js
  const sortedBands = bands.sort((a, b) => stript(a) > stript(b) ? 1 : -1);
  ```

### Self-memorizing function

My friend Etrex pointed out that my solution and the solution from Wesbos were both performed redundant function calls (24 times call for 13 array element) when sorting with a callback function and therefore I decide to refactor the `striptName()` function into a self-memorizing function.

The goal is to make sure that the function only cumpute once for each argument passed in (the band's name in this case).

- Functions are first-class objects

  Functions are objects in JavaScript, thus it is possible to add custom properties to them, and it is a way to store the computing results as well.

Here's my final wrokaround:

```js
const excludeList = ['The', 'An', 'A'];

function striptName(a) {
  // to build cache of the function
  if (!striptName.cache) {
    striptName.cache = {};
  };

  // check if the result has been cached
  if (striptName.cache[a] !== undefined) {
    return striptName.cache[a];
  };

  const nameArr = a.split(' ');

  if (excludeList.includes(nameArr[0])) {
    nameArr.shift();
    return striptName.cache[a] = nameArr.join(' ');
  } else {
    return striptName.cache[a] = a;
  }
}

const sortedBands2 = bands.sort((a, b) => stript(a) > stript(b) ? 1 : -1);
```
