import { RouteProp } from "@react-navigation/native"
import { View } from "react-native"
import { RootStackParamList } from "../navigation/Routes"
import { useEffect, useState } from "react"
import { formStore } from "../storage/global"
import { ImagesReportField } from "../types/reportData"
import { generateUniqueID } from "../funcs/generateID"
import { treatData } from "../funcs/treatData"
import { PdfGenerator } from "../PDF/pdfGenerator"
type FinishScreenRouteProp = RouteProp<RootStackParamList, 'Finish'>

type FinishScreenProps = {
    route: FinishScreenRouteProp
}

export const FinishReport = ({route}: FinishScreenProps) => {
    const [modalVisibility, setModalVisibility] = useState(false);
    const [filePath, setFilePath] = useState<string| undefined>(undefined);
    const receivedData = formStore.useState((state) => state);

    const ReportID = generateUniqueID();

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