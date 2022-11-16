import React, { Fragment } from "react";
import { Text, StyleSheet } from "react-native";

const TextArea = ({ children, style }) => {
  let styleDefault = styles.textStyle;
  if (style?.fontWeight === "bold") {
    styleDefault = styles.textStyleBold;
  }
  return (
    <Fragment>
      <Text style={[style, styleDefault]}>{children}</Text>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontFamily: "MontSerratRegular",
    fontWeight: "normal",
  },
  textStyleBold: {
    fontFamily: "MontSerratBold",
    fontWeight: "normal",
  },
});

export default TextArea;
