const Gpio = require('orange-pi-gpio');
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

let value = 1;

let gpio0 = new Gpio({
  pin: 0, mode: 'out', ready: () => {
    process.stdin.on('keypress', (str, key) => {
      console.log(str)
      console.log(key)
      console.log(value)
      if (str === 'q') {
        process.exit();
      }
      gpio0.write(value === 1 ? 0 : 1);
    })
  }
});