//@flow
import React from "react";

const Home = (props: any) => {
  const googleLogin = () => {
    window.firebase
      .auth()
      .signInWithRedirect(new window.firebase.auth.GoogleAuthProvider());
  };
  return (
    <div>
      <h1>Welcome</h1>
      <button onClick={googleLogin}>sign in with google</button>
    </div>
  );
};

export default Home;
