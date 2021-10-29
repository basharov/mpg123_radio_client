const Gpio = require('orange-pi-gpio');

let gpio5 = new Gpio({pin:9});

gpio5.read()
  .then((state)=>{
    console.log(state); //state of pin 5
  });