document.getElementById('convert').addEventListener('click', convertTemperature);
document.getElementById('reset').addEventListener('click', reset);

        function convertTemperature() {
            let temperature = document.getElementById('temperature').value;
            let unit = document.getElementById('unit').value;
            let result;

            if (temperature === '') {
                alert('Please enter a temperature');
                return;
            }

            if (unit === 'Celsius') {
                result = (temperature * 9/5) + 32 + ' Fahrenheit';
            } else if (unit === 'Fahrenheit') {
                result = (temperature - 32) * 5/9 + ' Celsius';
            } else if (unit === 'Kelvin') {
                result = temperature - 273.15 + ' Celsius';
            }

            document.getElementById('result').innerHTML = result;
        }
 