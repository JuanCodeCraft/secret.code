// script.js
const searchButton = document.getElementById('searchButton');
const codeInput = document.getElementById('codeInput');




searchButton.addEventListener('click', () => {
  const enteredCode = codeInput.value.trim().toLowerCase();
  const secretCodes = {
  
    // Define your secret codes and their corresponding actions
    '1990': 'index2.html',
    // Add more codes and URLs as needed
  };
  
  if (secretCodes.hasOwnProperty(enteredCode)) {
    window.location.href = secretCodes[enteredCode];
  } else {
    alert('You know some thing. Try again.');
    codeInput.value = ''; // Clear the input
    document.body.classList.add('creepy'); // Add creepy class to the body
  }
});





