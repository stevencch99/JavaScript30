# Target
Make animation effect by CSS and JavaScript.
Using:  
- CSS flex, transform, transition. 
- JavaScript events and class toggle.

## 重點整理
- The propertyName called just "flex" in Safari rather than "flex-grow" in other browsers.
```js
const panels = document.querySelectorAll('.panel');

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panel.forEach(panel => panel.addEventListener('transitionend', toggleActive));
```

## 補充
- [flex.io](https://flexbox.io/)
