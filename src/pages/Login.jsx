import { useState } from "react";
//preventdefault ==refresh

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  function loginHandler(e) {
    e.preventDefault();
    setUserName(e.target.userName.value);
    setPassword(e.target.password.value);
  }
  console.log("pass", password);
  console.log("user", userName);
  return (
    <div>
      <form onSubmit={loginHandler}>
        <input type="text" name="userName" />
        <input type="text" name="password" />
        <button type="submit">Login</button>
        <input type="button" value="Register" />
      </form>
    </div>
  );
}
