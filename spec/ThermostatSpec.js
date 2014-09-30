describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should be equal to 20", function() {
    expect(thermostat.temperature).toEqual(20);
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
});
