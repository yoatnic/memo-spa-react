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
      <MdEditorList userData={props.userData} />
    </div>
  );
};

export default Editor;
