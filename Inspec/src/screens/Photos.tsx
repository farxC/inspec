import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native"
import { PhotoSection } from "../components/PhotoSection"
import { PhotoObject } from "../types/photos"
import { SubmitButton } from "../components/SubmitButton"
import styles from "../assets/styles"
import { SubmitErrorHandler, useFormContext } from "react-hook-form"
import { ImagesReportField, report_data } from "../types/report_data"
import { ControlledInput } from "../components/Input"
import { SpinnerLoading } from "../components/SpinnerLoading"
import { useState } from "react"
import { readImages } from "../funcs/readImages"
import { sendData } from "../funcs/sendData"
import { PopUp } from "../components/PopUp"

type ComponentState ={
   [key in "spinner" | "popup"]: {
        visibility: boolean,
        message: string,
    }
}


export const Photos = () => {

    const {control,handleSubmit, reset} = useFormContext<report_data>(); 
    const [state, setState] = useState<ComponentState>(
        {spinner: {
          visibility:false,
          message: "Enviando informações..."
        },
         popup: {
         visibility: false,
         message: "Itens necessários não foram enviados."
        },
        }
    )

    const toggleComponents = (component: keyof ComponentState, message?: string) => {
        setState((prevState) => ({
            ...prevState,
            [component]:{
                ...prevState[component],
                visibility: !prevState[component].visibility,
                message: message ?? prevState[component].message
            }
        }))
    }

    const submit = async (data:report_data) => {
        //Trigger spinner loading
        toggleComponents("spinner")
        try{
            //Object descruturing to hold the images from data.
            const {images_report} = data
            const {optionalImages,...addressedImages} = images_report
            
            //Passing only the required images to process and encode to base64
            const requiredImages = await readImages(addressedImages)
            
            if(optionalImages != null || optionalImages !== undefined){
                const encodedOptionals = await readImages(optionalImages); 
                // Sends both required and optional images.
                const res = await sendData({...data, images_report: {...requiredImages, optionalImages: encodedOptionals}})
            }
            const res = await sendData({...data, images_report:{...requiredImages}});
            toggleComponents("spinner");
            setTimeout(() => toggleComponents("popup", res), 1000);
        } catch(error){
            toggleComponents("spinner")
            toggleComponents("popup", "Não foi possível enviar as informações, tente novamente.")
            
        } 
      
    }


    const onInvalid: SubmitErrorHandler<report_data> = (errors) => {
        if (errors){
          toggleComponents("popup")
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
                <SpinnerLoading isVisible={state.spinner.visibility} message={state.spinner.message}/>
                <PopUp onPress={() => toggleComponents("popup")} isVisible={state.popup.visibility} title="Aviso" bodyMessage={state.popup.message}></PopUp>
            </ScrollView> 
           

       </SafeAreaView>
    )
}