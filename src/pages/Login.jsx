import { useState } from "react";
import style from "../components/Login.module.css";
import { login, logout } from "../components/Store";
import { useDispatch, useSelector } from "react-redux";

export function Login() {
  const [newUser, setNewUser] = useState("");

  const dispatch = useDispatch();

  const { username, isAuth } = useSelector((state) => state.user);

  return (
    <div>
      <h2>Welcome {username}</h2>
      <div className={style.container}>
        <form>
          <input
            type="text"
            className={style.containerInput}
            placeholder="Enter your username"
            onChange={(event) => setNewUser(event.target.value)}
          ></input>
          {/* REVIEW: The password field has no state or onChange handler — its value is
              never captured. Either store the password in state and include it in the
              login logic, or remove the field if authentication doesn't require it. */}
          <input
            type="password"
            className={style.containerInput}
            placeholder="Enter your password"
          ></input>
          {!isAuth ? (
            <button
              type="button"
              className={style.containerButton}
              // REVIEW: No validation — an empty username can be dispatched.
              // Add a check like `if (!newUser.trim()) return;` before dispatching.
              onClick={() => dispatch(login({ username: newUser }))}
            >
              Login
            </button>
          ) : (
            <button
              type="button"
              className={style.containerButton}
              onClick={() => dispatch(logout())}
            >
              Logout
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
