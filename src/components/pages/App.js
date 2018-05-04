import React from "react";

import Home from "./Home";
import Editor from "./Editor";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: !!window.firebase.auth().currentUser
    };
  }

  componentDidMount() {
    window.firebase.auth().onAuthStateChanged(user => {
      this.setState(prevState => {
        return Object.assign({}, prevState, { isLogin: !!user });
      });
    });
  }

  render() {
    return this.state.isLogin ? <Editor /> : <Home />;
  }
}

export default App;
