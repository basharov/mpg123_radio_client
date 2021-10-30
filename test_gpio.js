const Gpio = require('orange-pi-gpio');
const readline = require('readline');
const {exec} = require('child_process');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

let value = 0;
let channel = 1;

let gpio1 = new Gpio({pin: 1, mode: 'in'});

const switchChannel = (value) => {
  exec(`./play.sh ${value}`, (err, stdout, stderr) => {
    if (err) {
      //some err occurred
      console.error(err)
    } else {
      // the *entire* stdout and stderr (buffered)
      console.log(`stdout: ${stdout}`);
      console.log(`stderr: ${stderr}`);
    }
  });
}

let gpio0 = new Gpio({
  pin: 0, mode: 'out', ready: () => {
    console.log('Press q to quit.')
    process.stdin.on('keypress', (str, key) => {
      if (str === 'q') {
        process.exit();
      }
    })
    setInterval(() => {
      gpio1.read()
        .then((state) => {
          // console.log(`button: ${state}`); //state of pin 1
          value = state;
          gpio0.write(value);
          console.log({channel, value})
          if (channel !== value)
            switchChannel(value)
        });

    }, 100)
  }
});