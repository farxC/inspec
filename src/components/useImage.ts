import { useEffect, useState } from "react"
import { loadImage } from "../storage/loadImage";


export const useImage = (id: number) => {
    const [uri, setUri] = useState<string | null>(null);
    //Load saved image from AsyncStorage on component mount
    useEffect(() => {
        let isMounted = true;
    
        const retrieveImage = async (id: number) => {
          const loadedImage = await loadImage(id);
          if (typeof loadedImage === "string" && loadedImage.length > 1) {
            setUri(loadedImage);
          };
        };
        retrieveImage(id);
        return () => {
          isMounted = false;
        }
      }, [id]);
      return uri
}