import React, { useState } from "react";
import LoginForm from "../LoginForm";
import SignupForm from "../SignupForm";

function Login() {
  const [login, setLogin] = useState(true);
  return (
    <>
      <h4 className="text-2xl lg:text-3xl font-semibold text-center mt-5">
        {login ? "Daxil ol" : "Qeydiyyat"}
      </h4>

      {login ? (
        <LoginForm setLogin={setLogin} />
      ) : (
        <SignupForm setLogin={setLogin} />
      )}
    </>
  );
}

export default Login;
