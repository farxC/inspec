import { ActivityIndicator, Modal, View, Text, StyleSheet } from "react-native"
import { ModalComponent } from "./ModalComponent"

export const SpinnerLoading = ({isVisible}:{isVisible: boolean}) => {
    return(
        <ModalComponent isVisible={isVisible}>
            <ModalComponent.Container>
                <ModalComponent.Body>
                    <View style={styles.view}>
                        <ActivityIndicator size={"large"}/>
                        <Text>Enviando informações..</Text>
                    </View>
                </ModalComponent.Body>
            </ModalComponent.Container>
            
        </ModalComponent>
    )
}


const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})