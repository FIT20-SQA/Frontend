import React, { useState } from "react";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDeault();
    console.log(email);
  };

  return (
    <div className="row no-gutters">
      <div className="col">
        <div className="leftside">
          <form className="login-form" onSubmit={handleSubmit}>
            <div className="sign-in">
              <h1 className="text-danger pb-5">MovieMate</h1>
              <h1>
                <strong>Sign in</strong>
              </h1>
            </div>

            <div className="label-email">
              <label htmlFor="email">
                <strong>E-mail</strong>
              </label>
            </div>
            <input
              className="p-2 w-100"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              id="email"
              name="email"
            />
            <div className="label-password">
              <label htmlFor="password">
                <strong>Password</strong>
              </label>
            </div>
            <input
              className="p-2 w-100"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="Enter your password"
              id="password"
              name="password"
            />
            <div className="button-login">
              <div className="size-button-login">
                <button className="btnlogin " type="submit">
                  <strong>Log In</strong>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col">
        <div className="login-image"></div>
      </div>
    </div>
  );
};
