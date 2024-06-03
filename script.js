//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const ageInput = document.getElementById("age");
    const nameInput = document.getElementById("name");

    const age = parseInt(ageInput.value);
    const name = nameInput.value.trim();

    if (!name || isNaN(age) || age <= 0) {
      alert("Please enter valid name and age.");
      return;
    }

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000);
    });

    promise
      .then((message) => {
        alert(message);
      })
      .catch((message) => {
        alert(message);
      });
  });
});
