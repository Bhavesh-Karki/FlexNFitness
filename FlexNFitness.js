        // Dark Mode Toggle
        const darkModeToggle = document.getElementById("darkModeToggle");
        const darkModeIcon = document.getElementById("darkModeIcon");
        let isDarkMode = localStorage.getItem("dark-mode") === "enabled";

        // Function to update the icon
        function updateIcon() {
            if (isDarkMode) {
                darkModeIcon.classList.replace("fa-toggle-on", "fa-toggle-off");
            } else {
                darkModeIcon.classList.replace("fa-toggle-off", "fa-toggle-on");
            }
        }

        // Apply dark mode if enabled
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
            updateIcon();
        }

        darkModeToggle.addEventListener("click", function () {
            isDarkMode = !isDarkMode;
            document.body.classList.toggle("dark-mode", isDarkMode);
            localStorage.setItem("dark-mode", isDarkMode ? "enabled" : "disabled");
            updateIcon();
        });


        // Smooth Scrolling for Navigation Links
        document.querySelectorAll("nav a").forEach(link => {
            link.addEventListener("click", function (e) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: "smooth" });
                }
            });
        });

        // Chatbox Functionality
        function toggleChatbox() {
            const chatbox = document.getElementById("chatbox");
            chatbox.style.display = chatbox.style.display === "flex" ? "none" : "flex";
        }

        function sendMessage() {
            const inputField = document.getElementById("chatInput");
            const message = inputField.value.trim();
            if (message === "") return;

            appendMessage("You", message);
            respondToMessage(message);
            inputField.value = "";
        }

        function appendMessage(sender, text) {
            const chatboxMessages = document.getElementById("chatboxMessages");
            const messageDiv = document.createElement("div");
            messageDiv.innerHTML = `<strong>${sender}:</strong> ${text}`;
            chatboxMessages.appendChild(messageDiv);
            chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
        }

        function respondToMessage(message) {
            let response;
            if (message.toLowerCase().includes("exercise")) {
                response = "Regular exercise improves health. Try a mix of cardio and strength training!";
            } else if (message.toLowerCase().includes("diet")) {
                response = "A balanced diet is key! Include protein, healthy fats, and fiber-rich foods.";
            } else {
                response = "I'm here to help! Ask me about fitness, diet, or workouts.";
            }
            setTimeout(() => appendMessage("Chatbot", response), 500);
        }

        document.getElementById("startBtn").addEventListener("click", function (event) {
            if (event.button === 0) {  // Trigger on left mouse click (button 0)
                scrollToNav();
            }
        });

        function scrollToNav() {
            let navID = document.getElementById("navId");
            if (navID) {
                navID.scrollIntoView({ behavior: "smooth" });
            }
        }