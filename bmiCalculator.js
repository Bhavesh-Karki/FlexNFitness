        function toggleDarkMode() {
            document.body.classList.toggle('dark');
            let isDark = document.body.classList.contains('dark');
            document.getElementById('mode-btn').innerText = isDark ? 'Dark Mode' : 'Light Mode';
        }
        function calculateBMI() {
            let weight = document.getElementById('weight').value;
            let height = document.getElementById('height').value / 100; // Convert cm to meters
            let resultText = document.getElementById('bmi-result');
            let progressBar = document.getElementById('bmi-bar');

            if (weight > 0 && height > 0) {
                let bmi = (weight / (height * height)).toFixed(2);
                let category = "";
                let color = "green";
                let progress = (bmi / 40) * 100;

                if (bmi < 18.5) { category = "Underweight"; color = "blue"; }
                else if (bmi < 24.9) { category = "Normal Weight"; color = "green"; }
                else if (bmi < 29.9) { category = "Overweight"; color = "orange"; }
                else { category = "Obese"; color = "red"; }

                resultText.innerText = `Your BMI: ${bmi} (${category})`;
                resultText.style.backgroundColor = color;
                progressBar.style.width = `${progress}%`;
                progressBar.style.backgroundColor = color;
            } else {
                resultText.innerText = "Please enter valid values.";
                progressBar.style.width = "0%";
            }
        }