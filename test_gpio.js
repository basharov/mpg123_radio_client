const Gpio = require('orange-pi-gpio');


let gpio12 = new Gpio({
  pin: 12, mode: 'out', ready: () => {
    let value = 1;

    setInterval(function () {
      process.stdout.write('\x1B[2J\x1B[0f\u001b[0;0H');

      if (value) {
        console.log('\x1b[32m%s\x1b[0m', `ON`);
      } else {
        console.log('\x1b[31m%s\x1b[0m', `OFF`);
      }

      gpio12.write(value);
      value = +!value;
    }, 1000);

  }
});