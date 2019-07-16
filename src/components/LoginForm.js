import React, { Component } from "react";
import firebase from "firebase";
import { Text } from "react-native";
import { Button, Card, CardSection, Input, Spinner } from "./common";

class LoginForm extends Component {
  state = { email: "", password: "", error: "", loading: false };

  onButtonPress = () => {
    const { email, password } = this.state;

    this.setState({ error: "", loading: true });

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess)
      .catch(() => {
        firebase
          .auth()
          .createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess)
          .catch(this.onLoginFail);
      });
  };

  onLoginSuccess = () => {
    this.setState({
      email: "",
      password: "",
      loading: false,
      error: ""
    });
  };

  onLoginFail = () => {
    this.setState({
      error: "Authentication Failed",
      loading: false
    });
  };

  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }

    return <Button onPress={() => this.onButtonPress()}>Login</Button>;
  };

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            value={this.state.email}
            onChangeText={email => this.setState({ email })}
            placeholder="user@gmail.com"
            secureTextEntry={false}
          />
        </CardSection>
        <CardSection>
          <Input
            label="Password"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            placeholder="************"
            secureTextEntry
          />
        </CardSection>
        <Text style={styles.errorTextStyle}>{this.state.error}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  }
};

export default LoginForm;
