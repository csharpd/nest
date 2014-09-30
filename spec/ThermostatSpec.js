describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should be equal to 20", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should begin with PSM on", function(){
    expect(thermostat.powersavingMode).toBe(true);
  });

  describe("increasing the temperature", function() {
    it("increases if temperature < 25", function () {
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(21);
    });

    it("does not increase if the temperature >= 25", function() {
      thermostat.temperature = 25;
      thermostat.increaseTemperature();
      expect(thermostat.temperature).toEqual(25);
    });
  });

  describe("decreasing the temperature", function(){
    it("decreases if temperature >= 10", function (){
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(19);
    });

    it("does not decrease if the temperature < 10 ",function() {
      thermostat.temperature = 10
      thermostat.decreaseTemperature();
      expect(thermostat.temperature).toEqual(10);
    });
  });
});
