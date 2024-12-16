import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { PhotoSection } from "../components/PhotoSection"
import { PhotoObject } from "../types/photos"
import { SubmitButton } from "../components/SubmitButton"
import styles from "../assets/styles"
import { SubmitErrorHandler, useFormContext } from "react-hook-form"
import { ImagesReportField, report_data } from "../types/report_data"
import { ControlledInput } from "../components/Input"
import { readImages } from "../funcs/readImages"
import { sendData } from "../funcs/sendData"
export const Photos = () => {

    const {control,handleSubmit} = useFormContext<report_data>(); 

    const submit = async (data:report_data) => {
        try{
            //Object descruturing to hold the images from data.
            const {images_report} = data
            const {optionalImages,...addressedImages} = images_report
            
            //Passing only the required images to process and encode to base64
            const requiredImages = await readImages(addressedImages)

            if(optionalImages != null || optionalImages !== undefined){
                const encodedOptionals = await readImages(optionalImages); 
                
                // Sends both required and optional images.
                sendData({...data, images_report: {...requiredImages, optionalImages: encodedOptionals}}).then((res) => console.log(res.status))
            }
            
            sendData({...data, images_report:{...requiredImages}})

        } catch(error){
            console.error('Error in image processing: ',error)
        } 
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
                <SubmitButton onPress={handleSubmit(submit,onInvalid)}/>
            </ScrollView> 
           

       </SafeAreaView>
    )
}