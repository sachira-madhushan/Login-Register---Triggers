function Validation(values) {
    let error = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Email validation regex

    if (values.email === "") {
        error.email = "Email Cannot Be Empty";
    } else if (!emailRegex.test(values.email)) {
        error.email = "Please enter a valid email address.";
    }
    if (values.password === "") {
        error.password = "Password Cannot Be Empty";
    }

    return error;
}

export default Validation;
