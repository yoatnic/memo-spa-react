//@flow
import React from "react";
import MdEditorList from "../molecules/MdEditorList";

const Editor = (props: any) => {
  const logout = () => {
    window.firebase.auth().signOut();
  };
  return (
    <div>
      <button onClick={logout}>sigin out</button>
      <MdEditorList />
    </div>
  );
};

export default Editor;
