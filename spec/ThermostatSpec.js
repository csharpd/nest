describe("Thermostat", function() {
  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should be equal to 20", function() {
    expect(thermostat.temperature).toEqual(20);
  });

  it("should be begin with PSM on", function() {
    expect(thermostat.powerSavingMode).toBe(true);
  });

  describe('maximum temperature', function(){
    it('is 25 degrees with PSM on', function() {
      expect(thermostat.maximumTemperature()).toEqual(25);
    })

    it('is 32 degrees with PSM off', function() {
      thermostat.powerSavingMode = false;
      expect(thermostat.maximumTemperature()).toEqual(32);
    })
  });

   describe('increasing the temperature', function() {
    describe('PSM off', function(){
      beforeEach(function() {
        thermostat.powerSavingMode = false;
      });

      it("increases if temperature < 32", function () {
        thermostat.temperature = 25
        thermostat.increaseTemperature();
        expect(thermostat.temperature).toEqual(26);
      });

      it("does not increase if the temperature >= 32", function() {
        thermostat.temperature = 32;
        thermostat.increaseTemperature();
        expect(thermostat.temperature).toEqual(32);
      });
    });

    describe("with PSM on", function() {
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

    describe("resetting the temperature",function(){
      it("resets to 20 degrees",function(){
        thermostat.temperature = 10;
        thermostat.reset();
        expect(thermostat.temperature).toEqual(20);
      });
    });
    describe("energy usage", function(){
      it("is efficient if < 18", function(){
        thermostat.temperature = 15;
        expect(thermostat.energyUsage()).toEqual('efficient');
      });

      it("is average if >= 18 & < 25",function(){
        thermostat.temperature = 20;
        expect(thermostat.energyUsage()).toEqual('average');
      });

      it("is inefficient if > 25", function(){
        thermostat.temperature = 27
        expect(thermostat.energyUsage()).toEqual('inefficient');
      });
    });
  });
});
