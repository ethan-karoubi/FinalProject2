import React, { useState } from "react";
import Navbar from "./Home";
import Footer from "./Footer";
const RegisterPage: React.FC = () => {
  const styleDiv = {
    border: "blue solid 1px",
    width: "60%",
  };
  const background = {
    backgroundColor: "#ACADAF",
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    // Logique pour créer un nouvel utilisateur avec l'email et le mot de passe
    console.log(
      "Création d'un nouvel utilisateur avec les informations suivantes :"
    );
    console.log("Email:", email);
    console.log("Mot de passe:", password);
  };

  return (
    <div style={background}>
      <Navbar />

      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="container" style={styleDiv}>
          <h1 className="text-center">REGISTER</h1>
          <form>
            <div className="mb-3">
              <label
                htmlFor="emailInput"
                className="d-flex justify-content-center align-items-center"
              >
                Email:
              </label>
              <div className="d-flex justify-content-center align-items-center">
                <input
                  type="email"
                  className="form-control w-50 form-control text-center"
                  id="emailInput"
                  placeholder="enter your e-mail:"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <label
                htmlFor="passwordInput"
                className="d-flex justify-content-center align-items-center"
              >
                Password:
              </label>
              <div className="d-flex justify-content-center align-items-center">
                <input
                  type="password"
                  className="form-control w-50 form-control text-center"
                  id="passwordInput"
                  placeholder="enter your password:"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleRegister}
              >
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterPage;
