const Gpio = require('orange-pi-gpio');
const readline = require('readline');
const {exec} = require('child_process');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

let previousValue = 0;
let value = 0;
let channel = 1;

let gpio1 = new Gpio({pin: 1, mode: 'in'});

const switchChannel = (value) => {
  exec(`./play.sh ${value}`, (err, stdout, stderr) => {
    if (err) {
      console.error('=============')
      console.error(err)
      console.error('=============')
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  });
}

let gpio0 = new Gpio({
  pin: 0, mode: 'out', ready: () => {
    /*
        console.log('Press q to quit.')
        process.stdin.on('keypress', (str, key) => {
          if (str === 'q') {
            process.exit();
          }
        })
    */

    setInterval(() => {
      gpio1.read()
        .then((state) => {
          // console.log(`button: ${state}`); //state of pin 1
          value = Number(state);
          if (value !== previousValue) {
            gpio0.write(value);
            console.log({channel, value})
            if (channel !== value) {
              channel = value;
              switchChannel(value);
            }
          }
        });

    }, 100)
  }
});