import RNFS from "react-native-fs"
import { ImagesReportField } from "../types/reportData"

const checkOptional = (obj: ImagesReportField["optionalImages"]) => {
   
}
    
 

export const readImages = (images: ImagesReportField) => {
    const {failureEvidence, identifier, overview, optionalImages} = images
    checkOptional(optionalImages)
}