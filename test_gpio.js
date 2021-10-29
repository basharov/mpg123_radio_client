const Gpio = require('orange-pi-gpio');

let gpio5 = new Gpio({
  pin: 5, mode: 'out', ready: () => {
    let value = 1;

    setInterval(function () {

      if (value) {
        console.log('ON');
      } else {
        console.log('OFF');
      }

      gpio5.write(value);
      value = +!value;
    }, 1000);

  }
});