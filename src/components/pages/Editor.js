//@flow
import React from "react";
import MdEditorList from "../organizations/MdEditorList";
import firebase from "../../infra/Firebase";

const Editor = (props: any) => {
  const logout = () => {
    firebase.auth().signOut();
  };
  return (
    <div>
      <button onClick={logout}>sigin out</button>
      <MdEditorList userData={props.userData} />
    </div>
  );
};

export default Editor;
