import {readFile} from "react-native-fs"
import { ImagesReportField } from "../types/reportData"

const checkOptionals = (optionalImages: ImagesReportField["optionalImages"]) => {
    if(optionalImages){
      const filtered = Object.fromEntries(
        Object.entries(optionalImages).filter(([key, value]) => value.length > 1)
      ) 
      return filtered
    }
    return "Error handling optional images, not is a valid object"
    
}

export const readImages = async (images: ImagesReportField) => {
    const {optionalImages} = images
    const optionalsFiltered = checkOptionals(optionalImages)
   
    const transposeToBase64 = async (item: keyof typeof images) => {
       if(item !== "optionalImages"){
         const base64Data = await readFile(images[item], 'base64');
         images[item] = 'data:image/jpeg;base64'+ base64Data;
       }
       
    }
    try{
        for (const [key] of Object.entries(images)){
            await transposeToBase64(key as keyof typeof images)
        }

        return images
    } catch(error){
        console.error("Error converting image to base64", error)
    }
    
}