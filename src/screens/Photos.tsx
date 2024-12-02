import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { PhotoSection } from "../components/PhotoSection"
import { PhotoObject } from "../types/photos"
import { SubmitButton } from "../components/SubmitButton"
import styles from "../assets/styles"
import { StrictMode, useEffect } from "react"
import { formStore } from "../storage/global"
export const Photos = () => {
    const IDs: PhotoObject[] = [
        {IDsSession: [0,1,2]},
        {IDsSession: [3,4,5]},
        {IDsSession: [6,7,8]},
    ]

    return(
       <SafeAreaView style={styles.container}>
            <Text style={styles.header_txt}>RELATÓRIO FOTOGRÁFICO</Text>
            <ScrollView style={styles.container}>
                <PhotoSection id={IDs[0]} title="Obrigatórias" mandatory={true}/>
                <PhotoSection id={IDs[1]} title="Opcionais" mandatory={false}/>
                <PhotoSection id={IDs[2]} mandatory={false}/>
            </ScrollView> 
            <View>
                <SubmitButton onPress={() => console.log("Hello world!")} ></SubmitButton>
            </View>

       </SafeAreaView>
    )
}