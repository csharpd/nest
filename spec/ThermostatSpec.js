describe("Thermostat", function() {
  var thermostat;


  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it("should be equal to 20", function() {
    expect(thermostat.temperature).toEqual(20)
  });
});
