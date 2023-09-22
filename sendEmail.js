// sending contact me email 

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  const toEmail = "jessicapikunas@gmail.com";

  Email.send({
    SecureToken: "your_secure_token_here",
    To: toEmail,
    From: email,
    Subject: "New message from " + name,
    Body: message
  }).then((message) => {
    alert("Email sent successfully!");
    form.reset();
  }).catch((error) => {
    console.log(error);
    alert("Email failed to send.");
  });
});