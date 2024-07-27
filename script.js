document.addEventListener("DOMContentLoaded", function() {
    const messageBox = document.querySelector('.message-box');
    const messageInput = document.querySelector('.message-input');
    const messageSubmit = document.querySelector('.message-submit');
    const messagesContent = document.querySelector('.messages-content');

    // Add a new message
    function addMessage(text, isPersonal = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${isPersonal ? 'message-personal' : ''}`;
        messageDiv.innerHTML = `<span>${text}</span>`;
        
        // Optionally add a timestamp
        const timestampDiv = document.createElement('div');
        timestampDiv.className = 'timestamp';
        const date = new Date();
        timestampDiv.textContent = `${date.getHours()}:${date.getMinutes()}`;
        messageDiv.appendChild(timestampDiv);
        
        messagesContent.appendChild(messageDiv);
        messagesContent.scrollTop = messagesContent.scrollHeight; // Scroll to the bottom
    }

    // Display a welcome message
    function displayWelcomeMessage() {
        const welcomeMessage = "Hello! I'm [Your Name], a [Your Profession/Student/Enthusiast]. I'm here to chat and answer your questions. How can I assist you today?";
        addMessage(welcomeMessage);
    }

    // Handle message send
    function handleSendMessage() {
        const text = messageInput.value.trim();
        if (text) {
            addMessage(text, true); // Add the user's message
            messageInput.value = '';
            setTimeout(() => addMessage('This is a response.'), 1000); // Simulate a response
        }
    }

    // Event listeners
    messageSubmit.addEventListener('click', handleSendMessage);
    messageInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault(); // Prevent newline
            handleSendMessage();
        }
    });

    // Show the welcome message on page load
    displayWelcomeMessage();
});
