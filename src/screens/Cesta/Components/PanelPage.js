import React, { Fragment } from "react"
import { Image, StyleSheet, Dimensions } from 'react-native'
import TextArea from "../../../components/Text"
const width = Dimensions.get("screen").width;

const PanelPage = ({title, bannerImage})=>{
    return(
        <Fragment>
            <Image source={bannerImage} style={styles.top} />
            <TextArea style={styles.title}>{title}</TextArea>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    top: {
        width: "100%",
        height: (578 / 768) * width,
      },
      title: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16,
      },
})

export default PanelPage