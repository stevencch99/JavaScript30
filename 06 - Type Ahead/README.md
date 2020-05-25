# Target
Create an AJAX page, use `fetch()` method to get data, and `Element.innerHTML()` to manipulate html instantly.

## Key points
- `fetch`
`fetch()` is used to retrieve data from a url, return a promise that can be resolved.

  - The Promise returned from `fetch()` **won’t reject on HTTP error status** even if the response is an HTTP 404 or 500. Instead, it will resolve normally (with ok status set to `false`), and it will only reject on network failure or if anything prevented the request from completing.
  > [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)

```js
const cities = [];

fetch(endpoint)
  .then(blob => blob.json()) // retrieve data with json format
  .then(data => cities.push(...data));
```

- `RegExp`
Create a `RegExp` object used to match a string variable.

```js
function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex);
  })
};
```

- Add thousands separator into the population.
  - Option 1, `replace()`:

    ```js
    const population = place.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    ```

    - `\B`: Matches a non-word boundary. 
    - `x(?=y)`: **Lookahead assertion:** Matches "x" only if "x" is followed by "y".
    - `x(?!y)`: **Negative lookahead assertion:** Matches "x" only if "x" is not followed by "y".
    - `(?<=y)x`: **Lookbehind assertion:** Matches "x" only if "x" is preceded by "y".
    - `(?<!y)x`: **Negative lookbehind assertion:** Matches "x" only if "x" is not preceded by "y".

    This approach is kind of neat, but dosn't work well on number with decimal:

    ```js
    '12345.678'.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    // '12,345.678'

    "12345678.12345678".replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    // '12,345,678.12,345,678'
    ```

  - Option 2, `toLocaleString()`:
    ```js
    12345678.12345678.toLocaleString()
    // '12,345,678.123'
    ```