import { clearAllItems } from "./clearItems";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadImage = async (id: number) => {
    try {
      const imageURI = await AsyncStorage.getItem(id.toString());
      if (typeof imageURI === "string" && imageURI ) {
        const localImage: string = await JSON.parse(imageURI)
        clearAllItems()
        return localImage
      }
    } catch (error) {
      console.error('Error loading image from AsyncStorage:', error);
      return ''
    }
};