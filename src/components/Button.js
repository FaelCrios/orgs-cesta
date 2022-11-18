import React, {Fragment} from 'react'
import { StyleSheet ,TouchableOpacity} from 'react-native'
import TextArea from './Text'

const Button = ({text, onPress, style}) => {
    return(
        <Fragment>
            <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
        <TextArea style={styles.textOnButton}>{text}</TextArea>
        </TouchableOpacity>
        </Fragment>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#2a9f85",
        paddingVertical: 16,
        borderRadius: 20,
      },
      textOnButton: {
        textAlign: "center",
        color: "#ffffff",
        fontSize: 16,
        lineHeight: 26,
        fontWeight: "bold"
      },
})

export default Button