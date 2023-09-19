document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    // Here you can add code to handle the form submission, like sending data to a server
    
    // Display a thank you message or animate the form
    const form = document.querySelector('.contact-form');
    form.innerHTML = '<h2>Thank You!</h2><p>Your message has been Submitted successfully.</p>';
});
