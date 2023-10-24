function sendEmail() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const message = document.getElementById('message').value;

  fetch('/config.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .then(data => {
      const emailPassword = data.emailPassword;

      // Use the collected form field values and emailPassword for sending emails
      Email.send({
        Host: 'smtp.elasticemail.com',
        Username: 'info@coastalbreezehh.com',
        Password: emailPassword,
        To: 'alejandroandy447@gmail.com',
        From: 'alejandroandy447@gmail.com',
        Subject: 'CBHH Contact Message',
        Body: `
          Name: ${name}<br>
          Email: ${email}<br>
          Phone: ${phone}<br>
          Message: ${message}
        `,
      })
        .then((message) => {
          console.log('Email sent successfully');
          $('#successMessage').removeClass('hidden');
          // Hide the success message after 5 seconds
          setTimeout(function() {
            $('#successMessage').fadeOut(1000, function() {
              $(this).addClass('hidden');
              // reset the display property because the fadeOut function overrides it to display:none
              $(this).css('display', '');
            });
          }, 5000); // Adjust the duration as needed
        })
        .catch((error) => {
          console.error('Error sending message:', error);
          alert('Error sending the message. Please try again later.');
        });
    })
    .catch(error => {
      console.error('Error fetching configuration:', error);
    });
}
