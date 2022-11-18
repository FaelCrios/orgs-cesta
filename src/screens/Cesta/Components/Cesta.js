import React, { Fragment } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Item from "./Item";
import PanelDescription from "./PanelDescription";
import PanelPage from "./PanelPage";
import TextArea from "../../../components/Text";

const Cesta = ({ top, description, itens }) => {
  return (
    <Fragment>
      <FlatList
        data={itens.list}
        renderItem={Item}
        keyExtractor={({ name }) => name}
        ListHeaderComponent={() => {
          return (
            <Fragment>
              <PanelPage {...top} />
              <View style={styles.cesta}>
                <PanelDescription {...description} />
                <TextArea style={styles.title}>{itens.title}</TextArea>
              </View>
            </Fragment>
          );
        }}
      />

      {/* Section for view */}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  title: {
    color: "#464646",
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 32,
    borderRadius: 20,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
  },
});

export default Cesta;
