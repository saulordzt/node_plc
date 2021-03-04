//vamos a hacer los cambios
const { Controller } = require("ethernet-ip");
 
const PLC = new Controller();
 
// Controller.connect(IP_ADDR[, SLOT])
// NOTE: SLOT = 0 (default) - 0 if CompactLogix
PLC.connect("172.0.0.1", 0).then(() => {
    console.log(PLC.properties);
});