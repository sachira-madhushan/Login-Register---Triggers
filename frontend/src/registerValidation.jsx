function Validation(values) {
  let error = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation regex
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; // Password validation regex

  if (values.username === "") {
    error.username = "Username Cannot Be Empty";
  }
  if (values.email === "") {
    error.email = "Email Cannot Be Empty";
  } else if (!emailRegex.test(values.email)) {
    error.email = "Please enter a valid email address.";
  }
  if (values.password === "") {
    error.password = "Password Cannot Be Empty";
  } else if (!passwordRegex.test(values.password)) {
    error.password = "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
  }
  if (values.passwordRe === "") {
    error.passwordRe = "Please confirm your password.";
  } else if (values.password !== values.passwordRe) {
    error.passwordRe = "Passwords do not match";
  }

  if (!values.tandc) { // Check if checkbox is checked
    error.tandc = "Please agree to the Terms and Conditions";
  }

  return error;
}

export default Validation;
