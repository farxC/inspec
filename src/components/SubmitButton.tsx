import { StyleSheet, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

type btnProps ={
    onPress: () => void
}

export const SubmitButton = ({onPress} : btnProps) => {
    
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.textBtn}>Enviar</Text>
            <Icon style={styles.icon} size={28} name="arrow-up-bold"></Icon>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    icon:{
        left: "15%",
        color: 'white'
    },
    btn:{
        backgroundColor: "blue",
        borderRadius: 40,
        width: "30%",
        alignSelf: "center",
        bottom: '100%',
        padding: 5,
        borderColor: 'black',
        borderWidth: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn:{
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        left: "8%"
    }
})