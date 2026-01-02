import React, { useState } from "react";
import "./signin.css";

const Auth = () => {
  const [isSignin, setIsSignin] = useState(false);

  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginErrors, setLoginErrors] = useState({ email: "", password: "" });

  const [signinData, setSigninData] = useState({ email: "", password: "", confirmPassword: "" });
  const [signinErrors, setSigninErrors] = useState({ email: "", password: "", confirmPassword: "" });

  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSigninPassword, setShowSigninPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleForm = (e) => {
    e.preventDefault();
    setIsSignin(!isSignin);
    setLoginErrors({ email: "", password: "" });
    setSigninErrors({ email: "", password: "", confirmPassword: "" });
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleLoginChange = (e) => setLoginData({ ...loginData, [e.target.name]: e.target.value });
  const handleSigninChange = (e) => setSigninData({ ...signinData, [e.target.name]: e.target.value });

  // LOGIN SUBMIT
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    let valid = true;

    // Email validation
    if (!loginData.email.trim()) {
      errors.email = "This field is required";
      valid = false;
    } else if (!validateEmail(loginData.email)) {
      errors.email = "Please enter a valid email";
      valid = false;
    }

    // Password validation
    if (!loginData.password.trim()) {
      errors.password = "This field is required";
      valid = false;
    } else if (loginData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
      valid = false;
    }

    setLoginErrors(errors);

    if (valid) {
      alert("Login successful");
      setLoginData({ email: "", password: "" });
    }
  };

  // SIGNIN SUBMIT
  const handleSigninSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    let valid = true;

    // Email validation
    if (!signinData.email.trim()) {
      errors.email = "This field is required";
      valid = false;
    } else if (!validateEmail(signinData.email)) {
      errors.email = "Please enter a valid email";
      valid = false;
    }

    // Password validation
    if (!signinData.password.trim()) {
      errors.password = "This field is required";
      valid = false;
    } else if (signinData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
      valid = false;
    }

    // Confirm Password validation
    if (!signinData.confirmPassword.trim()) {
      errors.confirmPassword = "This field is required";
      valid = false;
    } else if (signinData.password !== signinData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setSigninErrors(errors);

    if (valid) {
      alert("Sign in successful");
      setSigninData({ email: "", password: "", confirmPassword: "" });
    }
  };

  return (
    <section className={`container forms ${isSignin ? "show-signin" : ""}`}>
      {/* LOGIN FORM */}
      <div className="form login">
        <div className="form-content">
          <header>Log in</header>
          <form onSubmit={handleLoginSubmit}>
            <div className="field input-field">
              <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                placeholder="Email"
              />
              <small className="error-msg">{loginErrors.email}</small>
            </div>

            <div className="field input-field">
              <input
                type={showLoginPassword ? "text" : "password"}
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Password"
              />
              <i
                className={`bx ${showLoginPassword ? "bx-show" : "bx-hide"} eye-icon`}
                onClick={() => setShowLoginPassword(!showLoginPassword)}
              ></i>
              <small className="error-msg">{loginErrors.password}</small>
            </div>

            <div className="field button-field">
              <button type="submit">Log in</button>
            </div>

            <div className="form-link">
              <span>
                Don't have an account?{" "}
                <a href="#" className="link signin-link" onClick={toggleForm}>
                  Sign in
                </a>
              </span>
            </div>
          </form>
        </div>

        <div className="line"></div>

        <div className="media-options">
          <a href="#" className="field facebook">
            <i className="bx bxl-facebook facebook-icon"></i>
            <span>Login with Facebook</span>
          </a>
        </div>
        <div className="media-options">
          <a href="#" className="field google">
            <i className="bx bxl-google google-icon"></i>
            <span>Login with Google</span>
          </a>
        </div>
      </div>

      {/* SIGNIN FORM */}
      <div className="form signin">
        <div className="form-content">
          <header>Sign in</header>
          <form onSubmit={handleSigninSubmit}>
            <div className="field input-field">
              <input
                type="email"
                name="email"
                value={signinData.email}
                onChange={handleSigninChange}
                placeholder="Email"
              />
              <small className="error-msg">{signinErrors.email}</small>
            </div>

            <div className="field input-field">
              <input
                type={showSigninPassword ? "text" : "password"}
                name="password"
                value={signinData.password}
                onChange={handleSigninChange}
                placeholder="Password"
              />
              <i
                className={`bx ${showSigninPassword ? "bx-show" : "bx-hide"} eye-icon`}
                onClick={() => setShowSigninPassword(!showSigninPassword)}
              ></i>
              <small className="error-msg">{signinErrors.password}</small>
            </div>

            <div className="field input-field">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={signinData.confirmPassword}
                onChange={handleSigninChange}
                placeholder="Write password again to confirm"
              />
              <i
                className={`bx ${showConfirmPassword ? "bx-show" : "bx-hide"} eye-icon`}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              ></i>
              <small className="error-msg">{signinErrors.confirmPassword}</small>
            </div>

            <div className="field button-field">
              <button type="submit">Sign in</button>
            </div>

            <div className="form-link">
              <span>
                Already have an account?{" "}
                <a href="#" className="link login-link" onClick={toggleForm}>
                  Log in
                </a>
              </span>
            </div>
          </form>
        </div>

        <div className="line"></div>

        <div className="media-options">
          <a href="#" className="field facebook">
            <i className="bx bxl-facebook facebook-icon"></i>
            <span>Login with Facebook</span>
          </a>
        </div>
        <div className="media-options">
          <a href="#" className="field google">
            <i className="bx bxl-google google-icon"></i>
            <span>Login with Google</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Auth;
