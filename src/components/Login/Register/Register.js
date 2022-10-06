import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SocialLink from "../SocialLink/SocialLink";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import Loading from "../../Pages/Loading/Loading";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    // const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);

    console.log("Updated profile");
    navigate("/");
  };
  return (
    <div className="form-container">
      <h2 className="pack-top">Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter Email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            className={` ${agree ? "" : "text-danger"}`}
            onClick={() => setAgree(!agree)}
            type="checkbox"
            label="Accept Genius Car Terms and Conditions"
          />
        </Form.Group>

        <Button
          disabled={!agree}
          variant="primary w-50 mx-auto d-block mb-2"
          type="submit"
          id="btn"
        >
          Register
        </Button>
      </Form>

      <p className="text-center">
        Already have an account?
        <Link
          to="/login"
          className="global-colors pe-auto text-decoration-none"
        >
          Login
        </Link>
      </p>

      <div className="d-flex align-items-center justify-content-center">
        <div style={{ height: "1px" }} className="global-bg w-50"></div>
        <p className="mt-2 px-2">Or</p>
        <div style={{ height: "1px" }} className="global-bg w-50"></div>
      </div>
      <SocialLink />
    </div>
  );
};

export default Register;
