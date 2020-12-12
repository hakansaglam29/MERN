exports.authRegister = (req,res) => {
    // TODO: Register function!
    const {firstName, lastName, email, password} = req.body;
    console.log(req.body)
    console.log(
        "Fields:",
        firstName,
        lastName,
        email,
        password,
    );
    res.send("Register Completed");
};

exports.authLogin = (req,res) => {
      // TODO : Auth.
    // TODO : Login func.
    console.log("Login Completed");
    res.send("Login Completed");
};