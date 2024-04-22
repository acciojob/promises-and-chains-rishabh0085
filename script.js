//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('myForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const ageInput = document.getElementById('age');
    const nameInput = document.getElementById('name');

    const age = parseInt(ageInput.value);
    const name = nameInput.value.trim();

    // Validate inputs
    if (!age || age < 1 || !name) {
      alert('Please enter both age and name.');
      return;
    }

    // Create a promise
    const submissionPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000);
    });

    // Handle promise resolution/rejection
    submissionPromise
      .then(message => {
        alert(message);
      })
      .catch(error => {
        alert(error);
      });
  });
});
