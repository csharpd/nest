function Thermostat() {
  this.temperature = 20;
}

Thermostat.prototype.increaseTemperature = function() {
  if(this.temperature < 25) this.temperature += 1;
};