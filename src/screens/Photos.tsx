import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { PhotoSection } from "../components/PhotoSection"
import { PhotoObject } from "../types/photos"
import { SubmitButton } from "../components/SubmitButton"
import styles from "../assets/styles"

import { useNavigation } from "@react-navigation/native"
import { PhotosReportNavigationType, StackNavigation } from "../navigation/Routes"
import { SubmitErrorHandler, SubmitHandler, useFormContext } from "react-hook-form"
import { report_data } from "../types/reportData"
import { useEffect } from "react"
import { ControlledInput } from "../components/Input"
import { Header } from "../components/Header"
export const Photos = () => {

    const {navigate} = useNavigation<StackNavigation>();
    
    const {control,handleSubmit} = useFormContext<report_data>(); 
    const goFinish = () => {
       navigate("Finish")
    }


    const onInvalid: SubmitErrorHandler<report_data> = (errors) => {
        if (errors.images_report){
            console.log(errors)
        }
    }

    const IDs: PhotoObject[] = [
        {IDsSession: [0,1,2]},
        {IDsSession: [3,4,5]},
        {IDsSession: [6,7,8]},
    ]

    return(
       <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                <ControlledInput control={control} rules={{required: "* Obrigatório"}} name="os" label='O.S/Tag' style={styles.input} mode="numeric"  placeholder=""></ControlledInput>
                <PhotoSection id={IDs[0]} mandatory={true}/>
                <PhotoSection id={IDs[1]} mandatory={false}/>
                <PhotoSection id={IDs[2]} mandatory={false}/>
                <SubmitButton onPress={handleSubmit(goFinish,onInvalid)}/>
            </ScrollView> 
           

       </SafeAreaView>
    )
}