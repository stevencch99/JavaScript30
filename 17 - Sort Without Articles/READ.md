# Target
To sort an array of band's names while ignore the article: 'The', 'An' and 'A' which infront of the band's name.
## Key points
- Sort funciton and the callback function.
- Short hand of array function with direct return value.
  ```js
  sortedBands = bands.sort((a, b) => stript(a) > stript(b) ? 1 : -1);
  ```

  - Refactoring of Array sorting, Step 1.
  ```js
  // const sortedBands = bands.sort(function(a, b) {
  //   if (stript(a) > stript(b)) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
  ```

  - Refactoring of Array sorting, Step 2.
  ```js
  // const sortedBands = bands.sort((a, b) => {
  //   return stript(a) > stript(b) ? 1 : -1;
  // });
  ```

  - Refactoring of Array sorting, Step 3.
  ```js
  const sortedBands = bands.sort((a, b) => stript(a) > stript(b) ? 1 : -1);
  ```
