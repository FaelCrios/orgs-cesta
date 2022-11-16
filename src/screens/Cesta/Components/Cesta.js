import React, { Fragment } from "react";
import { View, StyleSheet } from "react-native";
import PanelDescription from "./PanelDescription";
import PanelPage from "./PanelPage";


const Cesta = ({ top, description}) => {
  return (
    // Top of the page
    <Fragment>
      <PanelPage {...top}/>
      {/* Section for view */}
      <View style={styles.cesta}>
      <PanelDescription {...description}/>
      </View>

    </Fragment>
  );
};

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
})

export default Cesta;
