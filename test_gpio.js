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
      if (str === 'q') {
        process.exit();
      }
    })
    setInterval(()=>{
      gpio1.read()
        .then((state) => {
          // console.log(`button: ${state}`); //state of pin 1
          value = state;
          gpio0.write(value);
        });

    },1000)
  }
});