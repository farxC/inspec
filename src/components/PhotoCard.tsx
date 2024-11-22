import { ReactElement, useEffect } from "react";
import { PermissionsAndroid, Platform, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";
import { Controller, FieldValues, UseControllerProps, useFormContext } from "react-hook-form";
import { report_data } from "../types/reportData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { formStore } from "../storage/global";
import { clearAllItems } from "../storage/clearItems";
import { CameraOptions, ImageLibraryOptions, ImagePickerResponse, launchCamera, launchImageLibrary } from "react-native-image-picker";
import Icon from 'react-native-vector-icons/Ionicons'
import { Image } from "react-native";
import React from "react";
import { ControlledSubtitleInput } from "./Subtitle";

interface ImagesReportField{
    identifier: string;
    overview: string;
    failureEvidence: string;
    optionalImages?:{
        [key: string]: string;
    }
}

interface PhotoCardProps{
    title?: string;
    id: number;
    value?: string;
    onChange?: (imageURL: string) => void;
    subtitleInput?: ReactElement;

}
//Dessa forma nós mapeamos cada ID para uma determinada Field, assim, repassando o valor para o formulário.
const idToFieldMap:{[id: number]: keyof ImagesReportField | `optionalImages.${number}`} = {
    0: 'identifier',
    1: "overview",
    2: 'failureEvidence',
    3: 'optionalImages.1',
    4: 'optionalImages.2',
    5: 'optionalImages.3',
    6: 'optionalImages.4',
    7: 'optionalImages.5',
    8: 'optionalImages.6'
}



export const PhotoCard =({
    title,
    id,
    value,
    onChange,
    subtitleInput
}: PhotoCardProps) => {

    const [selectedImage, setSelectedImage ] = useState<string>(""); //Store the selected image URI
    const [addImageView, setAddImageView] = useState(true);
    const [valueImage, setValueImage] = useState<string | undefined>();
    const [isPressed, setIsPressed ] = useState(false);
    const {control , getValues } = useFormContext<report_data>();

   
    useEffect(() =>{
        if (value !== undefined) {
            setValueImage(valueImage)
        }

    }, [value])

    const handleStateImageSelected = (actualState: report_data, id: number, uri: string) => {
        // ID mapping for correspondent field ( See idToFieldMap object to more details.. )
        // Field is correspondent for the given ID.
        const field = idToFieldMap[id]
        
        //Check if image is a optional one.
        const isOptionalImage = field.startsWith('optionalImages')

        if (isOptionalImage){
            //Extracting the index of *optional images*
            const index = parseInt(field.split('.')[1],10)
            
            //If FALSE, the optional image state 'll be an empty object.
            if (!actualState.images_report.optionalImages){
                actualState.images_report.optionalImages = {}
            }

            actualState.images_report.optionalImages[index] = uri

            //Extracting the subtitle
            let subtitle = getValues(`images_subtitles.${id}`)

            //Typescript narrowing to avoid undefined.
            if(subtitle.length != 0 && actualState.images_subtitles){
                actualState.images_subtitles[id] = subtitle
            }
        // If is an mandatory one:
        } else if(field as keyof ImagesReportField in actualState.images_report){
            //Mapping the field as key to required images..
            actualState.images_report[field as 'identifier' | 'overview' | 'failureEvidence'] = uri
        } else{
            throw new Error (`Invalid field mapping: \n ${field}`)
        }
    }

    const deleteItem = (id: number) => {
        setIsPressed(!isPressed) // To True
        AsyncStorage.removeItem(id.toString())
        const removeCurrUri = ''
        formStore.update((state) => {
            handleStateImageSelected(state,id,removeCurrUri)
        })
        setAddImageView(true)
    }

    // Load saved image from AsyncStorage on component mount
    const loadImage = async () => {
        try{
            const imageURI = await AsyncStorage.getItem(id.toString());
            if(imageURI){
                const loadedImage = await JSON.parse(imageURI);
                clearAllItems();
                setSelectedImage(loadedImage);
                setAddImageView(false)
            }
        } catch(error){
            console.error('Error loading image from AsyncStorage: ',error);
        };
    };
    //loadImage()

    // Save the selected image to AsyncStorage
    const saveImage = async (imageURI: string, id: number) => {
        try{
            if (imageURI){
                const imageKey = id.toString();
                const imageJSON = JSON.stringify(imageURI);
                await AsyncStorage.setItem(imageKey, imageJSON);
            }
        } catch(error){
            console.error("Error saving image to AsyncStorage:", error);
        }
    }

    const handleImageSelection = async (uri: string, id: number) => {
        if (uri){
            await saveImage(uri, id);
            formStore.update((state) => {
                handleStateImageSelected(state,id,uri);
            });
            onChange?.(uri); // Call the onChange callback with the selected image URI for form validation.
            setSelectedImage(uri);
            setAddImageView(false);
        }
    }

    const checkResponse = (response: ImagePickerResponse) => {
        if (!response.didCancel && !response.errorMessage && response.assets !== undefined){
            let imageUri = response.assets?.[0].uri
            if(imageUri){
                handleImageSelection(imageUri,id)
            } else{
                console.error("Arquivo não compatível com um formato de imagem valido.")
            }
        }
    }


    const handleCameraLaunch = async () => {
        const photoOptions: CameraOptions = {
            mediaType: 'photo',
            saveToPhotos: true,
            maxHeight: 200,
            maxWidth: 200,
            includeBase64: true
        }

        const requestCameraPermission = async () => {
            if (Platform.OS == 'android'){
                try{
                    const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA)
                    return granted === PermissionsAndroid.RESULTS.GRANTED
                } catch(error){
                    console.warn(error)
                    return false
                }
            } else return true
        }

        const isCameraPermitted = await requestCameraPermission();
        if (isCameraPermitted){
            await launchCamera(photoOptions, async(response) => {
                checkResponse(response)
            })
        }
    }

    const imagePicker = () => {
        const pickerOptions: ImageLibraryOptions = {
            mediaType: 'photo',
            includeBase64: true,
            maxHeight: 200,
            maxWidth: 200
        };
        launchImageLibrary(pickerOptions, (response) => {
            checkResponse(response)
        })
    }


    return(
        <View style={styles.viewAdd}>
            {addImageView ? (
                <TouchableOpacity style={styles.buttonAdd} onPress={imagePicker}>
                    <Icon size={30} name="add-circle-outline" style={styles.iconAddSty}/>
                </TouchableOpacity>
            ): (
                <Image source={{uri: selectedImage}} style={styles.img}></Image>
            )}
            <View>
                {title? <Text>{title}</Text>: <ControlledSubtitleInput control={control} rules={{maxLength:30}} name={`images_subtitles.${id}`}/>}
                <View style={styles.iconsView}>
                    <Pressable onPress={handleCameraLaunch}>
                        <Icon size={22} style={styles.icons} name="camera"/>
                    </Pressable>
                    <Pressable onPress={() => deleteItem(id)}>
                        <Icon style={styles.icons} size={22} name="trash"></Icon>
                    </Pressable>
                </View>
            </View>

        </View>
      
    );
};

export function ControlledPhotoCard<FormType extends FieldValues>({
    control,
    name,
    rules,
    ...PhotoRegisterProps
}: UseControllerProps<FormType> & PhotoCardProps){
    return(
        <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
  
          <>
            <Text style={{color: 'red'}}>{error?.message}</Text>
            <PhotoCard value={field.value} {...PhotoRegisterProps} onChange={(selectedIMG) => {
              field.onChange(selectedIMG)
            }}/>
          </>
  
  
        )}
      />
    )
}

const styles = StyleSheet.create({
    viewAdd: {
        height: '100%',
        borderWidth: 2,
        width: "30%",
        borderRadius: 8,
        margin: "1%",
        paddingBottom: "7%",
        borderColor: '#c4c4c4',
        
      },
      container: {
        flex: 1,
      },
      buttonAdd: {
    
        height: "75%",
        backgroundColor: "#c4c4c4",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 5
      },
      title: {
        alignSelf: 'center',
        textAlign: "justify",
        fontSize: 12,
        fontWeight: "bold",
        marginVertical: '6%',
    
      },
      textInput: {
        alignSelf: 'center',
        textAlign: "justify",
        fontSize: 11,
        fontWeight: "bold",
        height: '40%',
        width: '85%'
      },
      iconAddSty: {
        color: "#065A1E",
      },
      img: {
        flexWrap: 'nowrap',
        width: "auto",
        height: "75%",
        borderRadius: 5
      },
      iconsView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: '1%',
      },
      icons: {
        paddingVertical: "2%",
        paddingHorizontal: "10%",
        color: 'white',
        backgroundColor: '#09511D',
        borderRadius: 50,
        marginBottom: '2%',
      },
      
})