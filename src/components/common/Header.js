// Import libraries for making a component

import React from "react";
import { Text, View } from "react-native";

// Make a component

const Header = props => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// Styles

const styles = {
  viewStyle: {
    backgroundColor: "#F8F8F8",
    alignItems: "center",
    justifyContent: "center",
    height: 60,
    paddingTop: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
};

// Make the component available to other parts of the app
export { Header };
