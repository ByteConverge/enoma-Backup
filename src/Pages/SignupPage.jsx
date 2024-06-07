import React from "react";
import { Link } from "react-router-dom";
import LenderSignUp from "./LenderSignUp";

function SignupPage() {
  return (
    <div className="container">
      <div className="intro">
        <nav>
          <div className="cycle"></div>
        </nav>
      </div>
      <section>
        <div className="welcome">
          <div className="welcomeToE-noma">
            <p className="bold">Welcome to E-Noma</p>
            <p className="text">
              Access to farmland,resources and professional farmers
            </p>
          </div>
          <div className="button">
            <Link to="/lenderSignUp">
              <button>Sign up as Farmer</button>
              <button>Sign up as Lender</button>
            </Link>
          </div>
        </div>
        <div className="SignUpImage">
          <img src="./src/assets/welcomeToEnoma.jpg" alt="SignUp image" />
        </div>
      </section>
    </div>
  );
}

export default SignupPage;
