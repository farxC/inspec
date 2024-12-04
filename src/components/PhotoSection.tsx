import { useFormContext } from "react-hook-form"
import { SafeAreaView, Text, View } from "react-native"
import { report_data } from "../types/reportData"
import React from "react"
import { PhotoObject } from "../types/photos"
import { ControlledPhotoCard, PhotoCard } from "./PhotoCard"
import { StyleSheet } from "react-native"

interface SectionProps{
    title?: string, // Refer the title from section
    repeat?: number, // Whether the section repeat
    mandatory: boolean, // If section is mandatory or not to handling different
    id: PhotoObject // Refers at section ID correspondent for validation
}


export const PhotoSection = ({title, mandatory, id}: SectionProps) => {
    
    const photosIDs = id.IDsSession;
    const {control} = useFormContext<report_data>();
    const req = "*"

    return(
        <View style={styles.main}>
            {title? <View style={styles.borderView}><Text style={{alignSelf:"center", fontWeight: '900', fontSize: 15}}>{title}</Text></View> : <></>}
            <View style={styles.container}>
                {mandatory? 
                    <>
                    <ControlledPhotoCard id={photosIDs[0]} control={control} rules={{required: req}} name="images_report.identifier" title="Identificação"/>
                    <ControlledPhotoCard id={photosIDs[1]} control={control} rules={{required: req}} name="images_report.overview" title="Visão Geral"/>
                    <ControlledPhotoCard id={photosIDs[2]} control={control} rules={{required: req}} name="images_report.failureEvidence" title="Evidência de Falha"/>
                    </>
                :
                    <>
                    
                    <ControlledPhotoCard id={photosIDs[0]} control={control} name="images_report.optionalImages"/>
                    <ControlledPhotoCard id={photosIDs[1]} control={control} name="images_report.optionalImages"/>
                    <ControlledPhotoCard id={photosIDs[2]} control={control} name="images_report.optionalImages"/>
                    </>
                    
                }
            </View>
           
        </View>
    )

}


const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        paddingVertical: '4%', 
        alignSelf: 'center',
        justifyContent: 'center',
        marginVertical: '7%'
    },
    main:{
        height: '25%',
    },
    borderView: {
        flexDirection: "column",
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth,
        alignItems: "center",
        marginBottom: '-1%',
        top: '15%'  
    },
    
})