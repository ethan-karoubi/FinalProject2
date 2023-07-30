import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Navbar from "./Home";
import Footer from "./Footer";

interface LoginFormState {
  email: string;
  password: string;
}

const LoginPage: React.FC = () => {
  const styleDiv = {
    border: "blue solid 1px",
    width: "60%",
  };
  const background = {
    backgroundColor: "#ACADAF",
  };

  const [loginForm, setLoginForm] = useState<LoginFormState>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    // Effectuer les opérations de connexion ici, comme envoyer les données au serveur
    console.log("Email:", loginForm.email);
    console.log("Password:", loginForm.password);
  };

  const handleCreateAccount = () => {
    // Rediriger vers la page de création de compte
    return <Navigate to="/registerPage" />;
  };

  return (
    <div style={background}>
      <Navbar />
      
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="container" style={styleDiv}>
          <h1 className="text-center">Login</h1>
          <form>
            <div className="mb-3 text-center">
              <label htmlFor="email" className="form-label">
                Email:
              </label>
              <div className="d-flex justify-content-center align-items-center">
                <input
                  type="email"
                  id="email"
                  className="form-control w-50 form-control text-center"
                  name="email"
                  placeholder="enter your e-mail:"
                  value={loginForm.email}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mb-3 text-center">
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <div className="d-flex justify-content-center align-items-center">
                <input
                  type="password"
                  id="password"
                  className="form-control w-50 form-control text-center"
                  name="password"
                  placeholder="enter your password:"
                  value={loginForm.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
          </form>
          <div className="create-account text-center mt-3">
            <p>Still not registered?</p>
            <button
              type="button"
              className="btn btn-link"
              onClick={handleCreateAccount}
            >
              Create an account
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginPage;
