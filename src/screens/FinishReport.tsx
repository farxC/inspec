import { RouteProp } from "@react-navigation/native"
import { View } from "react-native"
import { RootStackParamList } from "../navigation/Routes"
import { useEffect, useState } from "react"
import { formStore } from "../storage/global"
import { ImagesReportField } from "../types/reportData"
import { generateUniqueID } from "../funcs/generateID"
import { PdfGenerator } from "../PDF/pdfGenerator"
import { sendPhotos } from "../funcs/sendPhotos"
import RNFS from "react-native-fs"
import { readImages } from "../funcs/readImages"

type FinishScreenRouteProp = RouteProp<RootStackParamList, 'Finish'>

type FinishScreenProps = {
    route: FinishScreenRouteProp
}

export const FinishReport = ({route}: FinishScreenProps) => {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [filePath, setFilePath] = useState<string| undefined>(undefined);

    //Receive data using pull state
    const receivedData = formStore.useState((state) => state);

    const ReportID = generateUniqueID();
    const report_JSON = JSON.stringify(receivedData)
    const {images_report} = receivedData 
    readImages(images_report)

    const handlePhotos = async (data: string) => {
        try{
            const res = await sendPhotos(data)
        } catch(error){
            console.log(error)
        }
    }

    const generatePDF = async () => {
        try{
            const path = await PdfGenerator(receivedData)
            setFilePath(path)
        } catch(error){
            console.error('Error:', error)
        }
    
    }


    const toggleModal = () =>{
        setModalVisibility(!modalVisibility)
    } 

    handlePhotos(report_JSON);

   
    generatePDF();


    // Getting the image from the ImagesReportField interface.
    const getImageField = (obj: ImagesReportField, key: keyof ImagesReportField) => {
        return obj[key]
    }
    

    return (
        <View>
            
        </View>
    )
}