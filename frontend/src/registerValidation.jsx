function Validation(values) {
  let error = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation regex

  const password_pattern = /^(?=.*\d) (?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

  if (values.userName === "") {
    error.userName = "Username Cannot Be Empty";
  } else if (values.email === "") {
    error.email = "Email Cannot Be Empty";
  } else if (!emailRegex.test(values.email)) {
    error.email = "Please enter a valid email address."; // Improved email error message
  } else if (values.password === "") {
    error.password = "Password Cannot Be Empty";
  } else if (!password_pattern.test(values.password)) {
    error.password = "Password is not secure! It must contain at least one digit, one lowercase letter, one uppercase letter, and be at least 8 characters long.";
  } else if (values.password !== values.passwordRe) {
    error.passwordRe = "Passwords do not match";
  } else if (!values.tandc.checked) {
    error.tandc = "Please agree to the Terms and Conditions"; // Improved error message
  } else {
    // Clear password for security reasons (assuming it's a sensitive field)
    values.password = "";
  }

  return error;
}

export default Validation;
