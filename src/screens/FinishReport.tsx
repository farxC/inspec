import { RouteProp } from "@react-navigation/native"
import { Text, TouchableOpacity, View} from "react-native"
import { RootStackParamList } from "../navigation/Routes"
import { useEffect, useState } from "react"
import { formStore } from "../storage/global"
import { ImagesReportField, report_data } from "../types/reportData"
import { generateUniqueID } from "../funcs/generateID"
import { PdfGenerator } from "../PDF/pdfGenerator"
import axios, { Axios } from "axios"
import { api } from "../services/api"




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

    const sendPhotos = async (data: string) => {
       const res = await api.post("/api/photos", data)
       console.log(res.data)
       return res
    }

    const res = await sendPhotos(report_JSON)   


    // Getting the image from the ImagesReportField interface.
    const getImageField = (obj: ImagesReportField, key: keyof ImagesReportField) => {
        return obj[key]
    }

    useEffect(() => {
        const generatePDF = async () => {
            try{
                const path = await PdfGenerator(receivedData)
                setFilePath(path)
            } catch(error){
                console.error('Error:', error)
            }
        };
        generatePDF()

    }, [] )

    const toggleModal = () =>{
        setModalVisibility(!modalVisibility)
    } 


    return (
        <View>
           
        </View>
    )
}