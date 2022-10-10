import React, { useState } from "react";
import "./App.css";
import FormInput from "./Components/FormInput/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    birthday: "",
    confirmpassword: "",
  });

  const inputsArray = [
    {
      id: 1,
      idname: "username",
      type: "text",
      label: "Username",
      errorMessage:
        "should be 3-16 letters and no special charecter and no number",

      pattern: "^[a-zA-Z]{3,16}$",
    },
    {
      id: 2,
      idname: "email",
      type: "email",
      label: "Email",
      errorMessage: "enter a valid email",
    },
    {
      id: 3,
      idname: "birthday",
      type: "date",
      label: "Birthday",
      errorMessage: "",
    },
    {
      id: 4,
      idname: "password",
      type: "password",
      label: "Password",
      errorMessage:
        "should contain atleast 1-special charecter,1-Capital letter,1-numerical and total length should be minimum 8",
      pattern: "^(?=.{8,32}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*",
    },
    {
      id: 5,
      idname: "confirmpassword",
      type: "password",
      label: "Confirm Password",
      errorMessage: "passwords are not matching",
      pattern: values.password,
    },
  ];

  const handleOnChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    setValues({
      username: "",
      email: "",
      password: "",
      birthday: "",
      confirmpassword: "",
    });
  };

  console.log(values);
  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <h1>React Form</h1>
        {inputsArray.map((formInput) => {
          return (
            <FormInput
              key={formInput.id}
              {...formInput}
              value={values[formInput.idname]}
              handleOnChange={handleOnChange}
            />
          );
        })}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;

//let js-password-regex='^(?=.{8,32}$)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*';
