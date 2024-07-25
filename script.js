// Example JavaScript to dynamically add a message (optional)
document.addEventListener('DOMContentLoaded', () => {
    const chatBox = document.querySelector('.chat-box');
    
    // Example of adding a new message dynamically
    const newMessage = document.createElement('div');
    newMessage.classList.add('message', 'user');
    newMessage.innerHTML = `
        <div class="avatar"><img src="user-avatar.png" alt="User Avatar"></div>
        <div class="text">
            <p>This is a new dynamic message!</p>
        </div>
        <div class="timestamp">10:35 AM</div>
    `;
    chatBox.appendChild(newMessage);
});
