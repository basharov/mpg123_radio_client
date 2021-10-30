const Gpio = require('orange-pi-gpio');
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

let value = 0;

let gpio1 = new Gpio({pin: 1, mode: 'in'});

let gpio0 = new Gpio({
  pin: 0, mode: 'out', ready: () => {
    console.log('Press q to quit.')
    process.stdin.on('keypress', (str, key) => {
      console.log(str)
      console.log(key)
      console.log(value)
      if (str === 'q') {
        process.exit();
      }
      value = value === 1 ? 0 : 1;
      gpio0.write(value);

      gpio1.read()
        .then((state) => {
          console.log(`button: ${state}`); //state of pin 1
        });

    })
  }
});