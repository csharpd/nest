    function updateTemperature(thermostat) {
      $('.temperature').text(thermostat.temperature);
      $('h2').attr('class', '').addClass(thermostat.energyUsage());

      $.post('http://localhost:4567/temperature_change', { newTemperature: thermostat.temperature })

    }
    $(document).ready(function(){
      var thermostat = new Thermostat();

      updateTemperature(thermostat);

      $('.increaseTemp').on('click',function(){
         thermostat.increaseTemperature();
      });

      $('.decreaseTemp').on('click',function(){
        thermostat.decreaseTemperature();
      });

      $('.reset').on('click',function(){
        thermostat.reset();
      });

      $('button').on('click', function(){
        updateTemperature(thermostat);
      });

      $('#psm').on('change',function(){
        thermostat.powerSavingMode = $(this).prop('checked');
      });
    });