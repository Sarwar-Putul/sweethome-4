import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./Firebase.config";
import { connect } from "react-redux";

firebase.initializeApp(firebaseConfig);

const Login = (props) => {
  var provider = new firebase.auth.GoogleAuthProvider();

  let history = useHistory();
  let location = useLocation();

  let { from } = location.state || { from: { pathname: "/" } };

  const createAccount = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;

        props.dispatch({
          type: "ADD_USER",
          payload: user,
        });
        history.replace(from);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const submitHandler = (event) => {
    event.target.reset();
    event.preventDefault();
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100%", height: "85vh" }}
    >
      <div
        style={{
          width: "30%",
          height: "90%",
          borderRadius: "12px",
          boxShadow: "2px 2px 20px grey",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            width: "100%",
            height: "15%",
            backgroundColor: "#289672",
            borderRadius: "12px 12px 0 0",
          }}
        >
          <h3 style={{ color: "white", textAlign: "center" }}>Log in</h3>
        </div>

        <div className="d-flex justify-content-center align-items-center">
          <form onSubmit={submitHandler}>
            <div class="mb-3 mt-4">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div class="mb-3 form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="exampleCheck1"
              />
              <label class="form-check-label" for="exampleCheck1">
                remember me
              </label>
            </div>
            <div class="text-center">
              <button type="submit" class="btn-main">
                Sign In
              </button>
            </div>
          </form>
        </div>

        <p className="text-center mt-4">Or</p>

        <div class="text-center">
          <button onClick={createAccount} className="btn-main">
            Continue with google
          </button>
        </div>
      </div>
    </div>
  );
};

export default connect()(Login);
