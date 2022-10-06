import React from "react";
import google from "../../../images/google.png";
import github from "../../../images/github.png";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
import {
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import Loading from "../../Pages/Loading/Loading";

const SocialLink = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
  const navigate = useNavigate();
  let errorElement;

  if (loading || loading1) {
    return <Loading />;
  }
  if (error || error1) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message}
      </p>
    );
  }
  if (user || user1) {
    navigate("/");
  }
  return (
    <div className="w100 ms-auto">
      {errorElement}

      <button onClick={() => signInWithGoogle()} id="btn__auth__log">
        <img src={google} alt="" />
        <span className="px-2">Continue with Google</span>
      </button>

      <button onClick={() => signInWithGithub()} id="btn__auth__log">
        <img src={github} alt="" />
        <span className="px-2">Continue with Github</span>
      </button>
    </div>
  );
};

export default SocialLink;
