const Gpio = require('orange-pi-gpio');


for (let i = 1; i < 41; i++) {
  let gpio5 = new Gpio({pin: i});
  gpio5.read()
    .then((state) => {
      console.log({i, state}); //state of pin 5
    })
}