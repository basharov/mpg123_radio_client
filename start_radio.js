const Gpio = require('orange-pi-gpio');
const readline = require('readline');
const {exec} = require('child_process');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const pins = {
  0: {pin: new Gpio({pin: 0, mode: 'in'})},
  1: {pin: new Gpio({pin: 1, mode: 'in'})},
  2: {pin: new Gpio({pin: 5, mode: 'in'})},
}

const switchChannel = (channelNumber) => {
  exec(`./play.sh ${channelNumber}`);
}

const updateState = (state, gpioPin) => {
  value = Number(state);
  if (value !== previousValue) {
    console.log(pins);
    previousValue = value;
    channel = value;
    switchChannel(value);
  }
}

const initKeyboard = () => {
  console.log('Press q to quit.')
  process.stdin.on('keypress', (str, key) => {
    if (str === 'q') {
      exec(`./stop.sh ${value}`);
      process.exit();
    }
  })
}

const loadSavedState = () => {
  Object.keys(pins).forEach((pinKey) => {
    pins[pinKey].pin.read()
      .then((state) => {
        if (Number(state) === 0) {
          console.log(pinKey)
        }
      });

  })
}

const initListeners = () => {
  setInterval(() => {
    Object.keys(pins).forEach((pinKey) => {
      pins[pinKey].read()
        .then((state) => {
          updateState(state, pinKey)
        });

    })

  }, 100)
}

const init = () => {
  loadSavedState()
  // initKeyboard();
  // initListeners();
}


init();