// Get the form and result element
const form = document.getElementById('binary-form');
const result = document.getElementById('result');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent the form from submitting normally

  // Get the binary number from the input field
  const binaryNumber = document.getElementById('binary-number').value;

  // Check if the binary number is valid
  if (!/^[01]+$/.test(binaryNumber)) {
    result.textContent = 'Invalid binary number. Please enter a binary number consisting of only 0s and 1s.';
    return;
  }

  // Convert the binary number to decimal
  const decimalNumber = parseInt(binaryNumber, 2);

  // Convert the decimal number to hexadecimal
  const hexadecimalNumber = decimalNumber.toString(16).toUpperCase();

  // Display the hexadecimal number
  result.textContent = `The hexadecimal equivalent of ${binaryNumber} is ${hexadecimalNumber}.`;
});