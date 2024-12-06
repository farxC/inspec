import { StyleSheet, Text, TouchableOpacity } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"

type btnProps ={
    onPress: () => void
}

export const SubmitButton = ({onPress} : btnProps) => {
    
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.textBtn}>Salvar Processo</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: "#101D5A",
        borderRadius: 20,
        width: "90%",
        alignSelf: "center",
        padding: 8,
        borderColor: 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '8%'
    },
    textBtn:{
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        
    }
})