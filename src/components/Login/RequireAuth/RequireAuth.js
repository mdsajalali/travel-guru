import React from "react";

import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";

import auth from "../../../firebase.init";
import Loading from "../../Pages/Loading/Loading";

import { ToastContainer, toast } from "react-toastify";

const RequireAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification, sending, error] =
    useSendEmailVerification(auth);
  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div className="text-center pack-top">
        <h3 className="text-danger">Your Email is not verified!!</h3>
        <h5>Please Verify your email address</h5>
        <button
          id="btn"
          onClick={async () => {
            await sendEmailVerification();
            toast("send email confirmation");
          }}
        >
          Send Verification Email Again
        </button>
        <ToastContainer />
      </div>
    );
  }

  return children;
};

export default RequireAuth;
