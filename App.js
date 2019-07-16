import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Header, Button, Spinner } from "./src/components/common";
import LoginForm from "./src/components/LoginForm";

class App extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyC11aSMr9cowpVxRqaHNVRT2NyEnxLCck4",
      authDomain: "authentication-practice-692a4.firebaseapp.com",
      databaseURL: "https://authentication-practice-692a4.firebaseio.com",
      projectId: "authentication-practice-692a4",
      storageBucket: "",
      messagingSenderId: "490796125200",
      appId: "1:490796125200:web:68831645f851144f"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent = () => {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
        );
      case false:
        return <LoginForm />;
      default:
        return (
          <View style={styles.spinnerStyle}>
            <Spinner size="large" />
          </View>
        );
    }
  };

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = {
  spinnerStyle: {
    justifyContent: "center",
    alignItems: "center"
  }
};

export default App;
