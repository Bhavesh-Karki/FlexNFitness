        function bookTraining() {
            let name = document.getElementById('name').value;
            let email = document.getElementById('email').value;
            let age = document.getElementById('age').value;
            let number = document.getElementById('number').value;
            let gender = document.querySelector('input[name="gender"]:checked');
            let date = document.getElementById('date').value;
            let time = document.getElementById('time').value;
            let trainingType = document.getElementById('trainingType').value;

            if (!name || !email || !age || !number || !gender || !date || !time || !trainingType) {
                alert("Please fill in all fields.");
                return false;
            }

            alert(`Thank you, ${name}! Your training session on ${date} at ${time} is booked.`);
            location.reload();
            return false;
        }