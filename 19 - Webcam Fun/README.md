# Target

## Key points

Use `browser-sync` package to serve the page due to security concern.
- Install dependances in package.json: `npm install`
- To fix vulnerabilities if needed: `npm audit fix`
- Start a server: `npm start`
- Visit the webpage through localhost:3000
- To return the `setInterval` so we can have access to the interval and call "clearInterval" on it.

- Add effects by play with the pixels (loop through image data from canvas content).

  ```js
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] // Red
    pixels.data[i + 1] // Green
    pixels.data[i + 2] // Blue
    // omit
  }
  ```

## Additional Information

### To reset Camera in macOS

The answer to the prompt is persistent and the app will be listed in
**System Preferences > Security & Privacy > Privacy > Camera**.

macOS will only prompt you once for each app. It will not prompt you again about apps in the list. If you want to change the permission for these apps, you will have to do it from the list above.

Reset by command: `tccutil reset Camera`

> Ref: <https://blog.addpipe.com/camera-and-microphone-access-in-macos-mojave/>

