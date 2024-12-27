import { StyleSheet, Text, TouchableOpacity } from "react-native"
import { ModalComponent } from "./ModalComponent"


type PopUpProps = {
    isVisible: boolean
    title: string
    bodyMessage: string
    onPress: () => void
}

export const PopUp = ({
    isVisible,
    title,
    bodyMessage,
    onPress   
}: PopUpProps) => {
    
    return (
        <ModalComponent isVisible={isVisible}>
            <ModalComponent.Container>
                <ModalComponent.Header title={title}/>
                <ModalComponent.Body>
                    <Text style={PopUpStyles.text}>{bodyMessage}</Text>
                </ModalComponent.Body>
                <ModalComponent.Footer>
                    <TouchableOpacity onPress={onPress}>
                        <Text>Ok</Text>
                    </TouchableOpacity>
                </ModalComponent.Footer>
            </ModalComponent.Container>
        </ModalComponent>
    )
}


const PopUpStyles = StyleSheet.create({
    text:{
        fontSize: 20,
        fontWeight: "400",
        textAlign: "center"
    },
})