import { readFile } from "react-native-fs"
import { ImagesReportField } from "../types/report_data"


export const readImages = async <T extends ImagesReportField | { [key: string]: string }>(
  value: T
): Promise<T> => {

  //Handle object of images (optionalImages)
  if (typeof value === "object" && value !== null) {
    const validImages = Object.fromEntries(
      Object.entries(value)
        //Remove if:
        //1. The image path is an empty string;
        //2. The image path is null or undefined;
        .filter(([_, imagePath]) =>
          imagePath !== "" &&
          imagePath !== null &&
          imagePath !== undefined
        )
    );
    // If no valid ones remain, return the original value
    if( Object.keys(validImages).length === 0){
      return value;
    }
    //Create a new object to avoid the original object mutation
    const convertedValue = {...validImages};
    for (const [key, path] of Object.entries(convertedValue)){
      try {
        const base64Data = await readFile(path,'base64');
        convertedValue[key] = `data:image/jpeg;base64,${base64Data}`;
        
      } catch(error){
        console.warn("Couldn't process the image ", key, " in the path ", path)
        delete convertedValue[key];
      }
    }
    return convertedValue as unknown as T;
  }
  if (typeof value === "string" && value !== ''){
    try{
       const base64Data = await readFile(value, 'base64');
       return `data:image/jpeg;base64,${base64Data}` as unknown as T;
    } catch(error){
      console.warn(error)
      return value
    }
  } 
  //Retun the original value if doesn't match expected
  return value
}