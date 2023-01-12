import { useState } from "react";
import { MENUS } from "../util/data";
//preventdefault ==refresh

export default function Login(prop) {
  const { logState } = prop;
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function loginHandler(e) {
    e.preventDefault();
    setUserName(e.target.userName.value);
    setPassword(e.target.password.value);
    logState(userName,password)
    console.log(userName)
    // loginCheck(userName, password)
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
