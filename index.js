const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const message = document.getElementById('message');

// When Yes button is clicked
yesBtn.addEventListener('click', function() {
    message.textContent = 'Yay! 💕 I knew you loved me! 🥰';
    message.style.animation = 'none';
    setTimeout(() => {
        message.style.animation = 'fadeIn 0.5s ease-in';
    }, 10);
});

// When No button is clicked it turns into a Yes button
noBtn.addEventListener('click', function() {
    // Change the button text to Yes
    noBtn.textContent = 'Yes!';
    
    // Change the button style to match Yes button
    noBtn.style.background = 'linear-gradient(135deg, #ff6b9d 0%, #ff1493 100%)';
    noBtn.style.color = 'white';
    
    // Show a cheeky message
    message.textContent = 'I knew you\'d say yes! 😘';
    message.style.animation = 'none';
    setTimeout(() => {
        message.style.animation = 'fadeIn 0.5s ease-in';
    }, 10);
    
    // Optional: Make it act like the Yes button from now on
    noBtn.addEventListener('click', function() {
        message.textContent = 'Yay! 💕 I knew you loved me! 🥰';
    });
});
