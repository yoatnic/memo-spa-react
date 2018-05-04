//@flow
import React from "react";

const Editor = (props: any) => {
  const logout = () => {
    window.firebase.auth().signOut();
  };
  return (
    <div>
      <button onClick={logout}>sigin out</button>
    </div>
  );
};

export default Editor;
