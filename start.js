const nodaryEncoder = require('nodary-encoder');
const myEncoder = nodaryEncoder(20, 9);

let previousVolume = 0
let volume = 0

myEncoder.on('rotation', (direction, value) => {
  previousVolume = volume
  volume = value
  if (volume !== previousVolume) {
    console.log(volume)
  }
});
