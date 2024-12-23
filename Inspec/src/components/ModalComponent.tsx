import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Modal from "react-native-modal"


type ModalProps = {
    isVisible: boolean;
    children: React.ReactNode;
    
}

export const ModalComponent = ({
    isVisible,
    children,
    ...props 
}: ModalProps) => {
    
    
    return(
        <Modal
         isVisible={isVisible}
         animationInTiming={1000}
         animationOutTiming={1000}
         backdropTransitionInTiming={850}
         backdropTransitionOutTiming={850}
         {...props}>
            <View>
            {children}
            </View>
           
        </Modal>
    )
}

const ModalContainer = ({children}: {children: React.ReactNode}) => (
    <View style={modalStyles.container}>
        {children}
    </View>
);

const ModalHeader = ({title}: {title: string}) => (
    <View style={modalStyles.header}>
        <Text style={modalStyles.text}>{title}</Text>
    </View>
);

const ModalBody = ({children}: {children?: React.ReactNode}) => (
    <View style={modalStyles.body}>{children}</View>
)

const ModalFooter = ({children}: {children?: React.ReactNode}) => (
    <View style={modalStyles.footer}>{children}</View>
)


const modalStyles = StyleSheet.create({
    container: {
        backgroundColor: "#ffffff",
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#000",
        borderStyle: "solid",
      },
      header: {
        alignItems: "center",
        justifyContent: "center",
      },
      text: {
        paddingTop: 10,
        textAlign: "center",
        fontSize: 24,
      },
      body: {
        justifyContent: "center",
        paddingHorizontal: 15,
        minHeight: 100,
      },
      footer: {
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        flexDirection: "row",
      },
})


ModalComponent.Header = ModalHeader;
ModalComponent.Container = ModalContainer;
ModalComponent.Body = ModalBody;
ModalComponent.Footer = ModalFooter;
