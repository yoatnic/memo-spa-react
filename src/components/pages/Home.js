//@flow
import React from "react";
import firebase from "../../infra/Firebase";

type Props = {};

type State = {
  isLogin: boolean
};

class Home extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      isLogin: false
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState(prevState => {
        return Object.assign({}, prevState, {
          isLogin: !!user
        });
      });
    });
  }

  render() {
    console.log(this.state.isLogin);
    if (this.state.isLogin) {
      window.location = "/edit";
      return <div />;
    }

    const googleLogin = () => {
      firebase
        .auth()
        .signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    };
    return (
      <div>
        <h1>Welcome</h1>
        <button onClick={googleLogin}>sign in with google</button>
      </div>
    );
  }
}

export default Home;
