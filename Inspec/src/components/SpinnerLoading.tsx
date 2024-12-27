import { ActivityIndicator, Modal, View, Text, StyleSheet } from "react-native"
import { ModalComponent } from "./ModalComponent"

type Props = {
    isVisible: boolean,
    message: string
}

export const SpinnerLoading = ({
    message,
    isVisible
}: Props) => {
    return(
        <ModalComponent isVisible={isVisible}>
            <ModalComponent.Container>
                <ModalComponent.Body>
                    <View style={styles.view}>
                        <ActivityIndicator size={"large"}/>
                        <Text>{message}</Text>
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