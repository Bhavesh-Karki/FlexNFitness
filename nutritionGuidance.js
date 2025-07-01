       function toggleDarkMode() {
            let body = document.body;
            if (body.classList.contains("dark-mode")) {
                body.classList.remove("dark-mode");
                body.classList.add("light-mode");
                localStorage.setItem("theme", "light-mode");
            } else {
                body.classList.remove("light-mode");
                body.classList.add("dark-mode");
                localStorage.setItem("theme", "dark-mode");
            }
        }

        function generatePlan() {
            const plans = [
                "High Protein Diet",
                "Keto Diet",
                "Balanced Diet",
                "Low Carb Diet"
            ];
            document.getElementById('meal-plan').innerText = `Recommended Plan: ${plans[Math.floor(Math.random() * plans.length)]}`;
        }

        function trackIntake() {
            let calories = document.getElementById('calories').value;
            let water = document.getElementById('water').value;
            document.getElementById('tracker-output').innerText = `Calories: ${calories} kcal | Water: ${water} ml`;
        }

        window.onload = function () {
            const savedTheme = localStorage.getItem("theme") || "dark-mode";
            document.body.classList.add(savedTheme);
        };