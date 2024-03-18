import { useState } from "react";

export default function StateLogin() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    // reset input values when using states...
    setInputValues({
      email: "",
      password: "",
    });
  };

  const handleInputChange = (identifier, event) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      [identifier]: event.target.value,
    }));
  };

  // const handleEmailChange = (event) => {
  //   setEmail(event.target.value);
  // };
  // const handlePasswordChange = (event) => {
  //   setPassword(event.target.value);
  // };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={inputValues.email}
            onChange={(event) => handleInputChange("email", event)}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={inputValues.password}
            onChange={(event) => handleInputChange("password", event)}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
