const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(localMediaStream => {
      console.log(localMediaStream);
      // video.src = window.URL.createObjectURL(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.error(`You denied the webcam, maybe you should not do that.`, err);
    })
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height  = video.videoHeight;
  canvas.width = width;
  canvas.height = height
 
  // return so we can have access to the interval and call "clearInterval" on it.
  return setInterval(() => {
    // draw image from the location 0, 0 to video width, video height in every 16 milliseconds.
    ctx.drawImage(video, 0, 0, width, height);
  }, 16);
}

function takePhoto() {
  // played the sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  // console.log(data);
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.textContent = 'Download Image';
  strip.insertBefore(link, strip.firstChild);
}

getVideo();


video.addEventListener('canplay', paintToCanvas);
