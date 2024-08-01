(function() {
      emailjs.init(""); // Replace "YOUR_USER_ID" with your actual EmailJS user ID.
    })();

    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault();

      emailjs.sendForm('', '', this)
        .then(function() {
          alert('Email sent successfully!');
        }, function(error) {
          alert('Failed to send email: ' + JSON.stringify(error));
        });
    });