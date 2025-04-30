import { useState } from "react";
import "./Form.css";
const Form = () => {
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const handleInputChange = (event) => {
    setFormdata((currdata) => ({
      ...currdata,
      [event.target.name]: event.target.value,
    }));
  };
  const handleFormSubmit = (event) => {
    console.log(formdata);
    event.preventDefault();
    setFormdata({
      username: "",
      email: "",
      password: "",
    });
  };
  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={formdata.username}
            name="username"
            id="username"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">email</label>
          <input
            type="email"
            value={formdata.email}
            name="email"
            id="email"
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">password</label>
          <input
            type="password"
            value={formdata.password}
            name="password"
            id="password"
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Form;
