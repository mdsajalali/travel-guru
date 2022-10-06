import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLink from "../SocialLink/SocialLink";
import {
  useSignInWithEmailAndPassword,
  useSendPasswordResetEmail,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Pages/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  let errorElement;
  const location = useLocation();
  const emailRef = useRef("");
  const passwordRef = useRef("");

  let from = location.state?.from?.pathname || "/";

  if (loading || sending) {
    return <Loading />;
  }

  if (error) {
    errorElement = <p className="text-danger">Error: {error?.message}</p>;
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // console.log(email, password);

    signInWithEmailAndPassword(email, password);
  };

  const navigateRegister = (event) => {
    navigate("/register");
  };

  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("Send Email");
    } else {
      toast("Please enter your email address");
    }
  };

  return (
    <div className="form-container">
      <h2 className="pack-top">Please Login</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            ref={emailRef}
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            ref={passwordRef}
            placeholder="Password"
            required
          />
        </Form.Group>

        <Button
          variant="primary w-50 mx-auto d-block mb-2"
          type="submit"
          id="btn"
        >
          Login
        </Button>
      </Form>

      <p>{errorElement}</p>

      <p className="text-center">
        Don’t have an account?
        <Link
          to="/register"
          className="global-colors pe-auto text-decoration-none"
          onClick={navigateRegister}
        >
          Create an account
        </Link>
      </p>

      <p className="text-center">
        <button
          onClick={resetPassword}
          className="btn btn-link  global-color pe-auto"
        >
          Reset Password
        </button>
      </p>

      <div className="d-flex align-items-center justify-content-center">
        <div style={{ height: "1px" }} className="global-bg w-50"></div>
        <p className="mt-2 px-2"> Or</p>
        <div style={{ height: "1px" }} className="global-bg w-50"></div>
      </div>
      <SocialLink />
      <ToastContainer />
    </div>
  );
};

export default Login;
