import React from "react";
import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <div id="signup_Cont">
      <div className="signup_text_Cont">
        <h2 className="signup_title">Get early access today</h2>
        <p className="signup_text">
          It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions.
          Our support team would be happy to help you.
        </p>
      </div>
      <form className="signup_input_Cont" onSubmit={handleSubmit}>
        <input
          type="text"
          id="email"
          className={`signup_input ${!isValid ? "error" : email && "valid"}`}
          placeholder="johnappleseed@mail.com"
          onChange={handleEmail}
          value={email}
        />
        <a
          onClick={handleSubmit}
          href={`${isValid && "https://www.youtube.com/watch?v=mCdA4bJAGGk"}`}
          className="Stock_Btn"
          id="signup_button"
          d>
          Get Started For Free
        </a>
      </form>
      {!isValid && <div className="info">Ingrese un Mail valido.</div>}
    </div>
  );
};

export default Signup;
