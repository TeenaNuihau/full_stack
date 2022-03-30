module.exports.signUpErrors = (err) => {
    let errors = { pseudo: "", email: "", password: ""};

    if (err.message.includes('pseudo')) {errors.pseudo = "Incorrect username or already taken"}
        
    if (err.message.includes('email')) {errors.email = "Incorrect email"}

    if (err.message.includes('password')) {errors.password = "Password should be minimum 6"}
    
    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('pseudo')) {errors.pseudo = 'Username already taken'}

    if (err.code === 11000 && Object.keys(err.keyValue)[0].includes('email')) {errors.email = 'Email already taken'}

    return errors;
};

module.exports.signInErrors = (err) => {
    let errors = { email: '', password: ''}
    if (err.message.includes('email')) {
        errors.email = "Unknown email";
    }

    if (err.message.includes('password')) {
        errors.password = "Incorrect password"
    }
    return errors
}