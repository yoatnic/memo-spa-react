//@flow
import React from "react";
import MdEditorList from "../organizations/MdEditorList";
import firebase from "../../infra/Firebase";

type Props = {};

type State = {
  isLoading: boolean,
  isLogin: boolean,
  userData: any
};

class Editor extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      isLogin: false,
      userData: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState(prevState => {
        return Object.assign({}, prevState, {
          isLoading: false,
          isLogin: !!user,
          userData: user
        });
      });
    });
  }

  render() {
    if (this.state.isLoading) {
      return <div>loading...</div>;
    }

    if (!this.state.isLogin) {
      window.location = "/";
      return <div />;
    }

    const logout = () => {
      firebase.auth().signOut();
    };

    return (
      <div>
        <button onClick={logout}>sigin out</button>
        <MdEditorList userData={this.state.userData} />
      </div>
    );
  }
}

export default Editor;
