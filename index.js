// Wait for the DOM content to fully load before running the script
document.addEventListener('DOMContentLoaded', function () {
  // Get the contact form element by its ID
  const form = document.getElementById('contact-form');

  // Add a submit event listener to the form
  form.addEventListener('submit', function (event) {
    // Prevent the default form submission behavior (no page reload)
    event.preventDefault();

    // Show a success alert using SweetAlert2 library
    Swal.fire({
      icon: 'success',
      title: 'Message Sent!',
      text: 'Thanks for reaching out! I’ll get back to you soon.',
      confirmButtonColor: '#4f46e5'
    }).then(() => form.reset());
  });
});
