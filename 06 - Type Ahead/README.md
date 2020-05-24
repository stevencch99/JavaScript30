# Target
Create an AJAX page, use `fetch()` method to get data, and 


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
```js
const population = place.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
```
