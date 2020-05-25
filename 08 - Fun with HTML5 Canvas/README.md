# Target
Having fun with html `<canvas>` element.

## Key points
- **Canvas API**
  The Canvas API provides a means for drawing graphics via JavaScript and HTML `<canvas>` element. It can be used for animation, game graphics, data visualization, photo manipulation, and real-time video processing.
  > [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)

  **HTML**
  ```html
  <canvas id="draw" width="800" height="800"></canvas>
  ```

  **JavaScript**
  The `canvas` element has bunch of properties that can be configured.
  - getContext
    ```js
    const ctx = canvas.getContext('2d');

    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 10;
    ```

- **HSL**
  Cylindrical geometries:
  ![HSL cylinder from Wikipedia](https://en.wikipedia.org/wiki/File:HSL_color_solid_cylinder_saturation_gray.png)
  > HSL cylinder from [Wikipedia](https://en.wikipedia.org/wiki/HSL_and_HSV)

  - hue: The angular dimension starting at the red at 0°, passing through the treen primary at 120° and the blue primary at 240°, and thenwrapping back to red at 360°
  - saturation: 0 ~ 100%
  - lightness: 0 ~ 100%

## Reference
- [HLS and HSV](https://en.wikipedia.org/wiki/HSL_and_HSV) - Wikipedia