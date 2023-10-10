function sendEmail() {
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'alejandroandy447@gmail.com',
    Password: '8B334ED7D6656FF57F23D7ADB38AEDB3397D',
    To: 'alejandroandy447@gmail.com',
    From: document.getElementById('email').value,
    Subject: 'CBHH Contact Message',
    Body:
      'Name: ' +
      document.getElementById('name').value +
      '<br>Email: ' +
      document.getElementById('email').value +
      '<br>Phone: ' +
      document.getElementById('phone').value +
      '<br>Message: ' +
      document.getElementById('message').value,
  }).then((message) => alert('Message Sent Succesfully'));
  console.log('sent');
}

// Validation
// $(function () {
//   $('#contactForm input, #contactForm textarea').jqBootstrapValidation({
//     preventSubmit: true,
//     submitError: function ($form, event, errors) {
//       console.log(errors);
//       console.log('fatal');
//       //additional error messages or events
//     },
//     submitSuccess: function ($form, event) {
//       //function sendEmail() {
//       console.log($form);
//       Email.send({
//         Host: 'smtp.elasticemail.com',
//         Username: 'alejandroandy447@gmail.com',
//         Password: '8B334ED7D6656FF57F23D7ADB38AEDB3397D',
//         To: 'alejandroandy447@gmail.com',
//         From: document.getElementById('email').value,
//         Subject: 'CBHH Contact Message',
//         Body:
//           'Name: ' +
//           document.getElementById('name').value +
//           '<br>Email: ' +
//           document.getElementById('email').value +
//           '<br>Phone: ' +
//           document.getElementById('phone').value +
//           '<br>Message: ' +
//           document.getElementById('message').value,
//       }).then((message) => alert('Message Sent Succesfully'));
//       console.log('sent');
//     },
//   });
// });
