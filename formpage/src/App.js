import React, { useState } from "react";
function App() {
  let [state, setState] = useState({ name: "", email: "", password: "" });
  let handlechange = (e) => {
    console.log(e.target.value, "value");
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <div className="App">
      <div>
        <h1 className="text-center">Registration</h1>
      </div>
      <div className="container">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(state, "form values");
          }}
        >
          <div className="form-group">
            <label className="text-left" htmlFor="exampleInputEmail1">
              Full Name{" "}
            </label>
            <input
              name="name"
              onClick={(e) => {
                handlechange(e);
              }}
              type="text"
              className="form-control"
              id="exampleInputName"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              name="email"
              onClick={(e) => {
                handlechange(e);
              }}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              onClick={(e) => {
                handlechange(e);
              }}
              name="password"
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-danger">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
