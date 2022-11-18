import React, { Fragment } from "react";
import { View, Image, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import TextArea from "../../../components/Text";

const Item = ({item: {name, image}}) => {
    return (
          <TouchableOpacity>
            <View style={styles.item}>
              <Image style={styles.image} source={image} />
              <TextArea style={styles.text}>{name}</TextArea>
            </View>
          </TouchableOpacity>
          )
  
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ececec",
    paddingVertical: 20,
    marginHorizontal: 20,
    alignItems: 'center'
  },
  image: {
    borderRadius: 20,
    width: 46,
    height: 46,
    shadowRadius: 20
  },
  text:{
    fontSize: 16,
    lineHeight: 26,
    paddingLeft: 12,
    color: '#464646',
    shadowRadius: 20
  }
});

export default Item;
