import { StyleSheet, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

type btnProps ={
    onPress: () => void
}

export const SubmitButton = ({onPress} : btnProps) => {
    
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text>Submeter fotos</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: "red"
    }
})