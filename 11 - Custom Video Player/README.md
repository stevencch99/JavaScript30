# Target
Build a customer video player via HTML5 video tag.

## Key points

### Manipulate video object property

- Properties of objects can be accessed through the array notation:
```js
var method = "smile";
foo[method](); // will execute the method "smile"
```

To toggle play directly by `video[method]()`.
```js
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
}

video.play();
video['play']();
```
