document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = `Thank you, ${name}. Your message has been sent!`;
    
    // Clear the form fields
    this.reset();
});
