import React from "react";

import Home from "./Home";
import Editor from "./Editor";
import firebase from "../../infra/Firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: !!firebase.auth().currentUser,
      userData: null
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState(prevState => {
        return Object.assign({}, prevState, {
          isLogin: !!user,
          userData: user
        });
      });
    });
  }

  render() {
    return this.state.isLogin ? (
      <Editor userData={this.state.userData} />
    ) : (
      <Home />
    );
  }
}

export default App;
