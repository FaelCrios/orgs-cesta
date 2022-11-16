import React, { Fragment } from "react";
import { View, Image, StyleSheet } from "react-native";
import TextArea from "../../../components/Text";


const PanelDescription = ({
  productTittle,
  productDescription,
  vendorName,
  vendorLogo,
  price,
}) => {
  return (
    <Fragment>
      <TextArea style={styles.productTittle}>{productTittle}</TextArea>

      <View style={styles.vendor}>
        <Image source={vendorLogo} style={styles.vendorLogo} />
        <TextArea style={styles.vendorName}>{vendorName}</TextArea>
      </View>

      <TextArea style={styles.productDescription}>
        {productDescription}
      </TextArea>
      <TextArea style={styles.price}>{price}</TextArea>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  productTittle: {
    fontSize: 26,
    lineHeight: 42,
    color: "#464646",
  },
  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  vendor: {
    flexDirection: "row",
    paddingVertical: 12,
  },
  vendorLogo: {
    width: 32,
    height: 32,
  },

  vendorName: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
  },
  productDescription: {
    color: "#a3a3a3",
    paddingVertical: 8,
    lineHeight: 26,
    fontSize: 16,
  },
  price: {
    color: "#2a9f85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
});

export default PanelDescription;
