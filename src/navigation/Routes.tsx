import { createNativeStackNavigator, NativeStackScreenProps } from "@react-navigation/native-stack";
import { FormProvider, useForm } from "react-hook-form"
import { FinishReport } from "../screens/FinishReport";
import { Photos } from "../screens/Photos";
import { report_data } from "../types/reportData";
import { formStore } from "../storage/global";
import { useEffect } from "react";
import { NavigationProp } from "@react-navigation/native";

export type ScreenNames = ["Photos", "Finish"]

export type RootStackParamList = Record<ScreenNames[number], undefined>;

export type StackNavigation = NavigationProp<RootStackParamList>;

const ScreensStack = createNativeStackNavigator<RootStackParamList>();

// Photo's Report Navigation Type
export type PhotosReportNavigationType = NativeStackScreenProps<RootStackParamList, "Photos">;

// Finish Report Navigation Type
export type FinishReportNavigationType = NativeStackScreenProps<RootStackParamList, "Finish">
    
export const Routes = () => {

    //React-hook-form initialization
    const methods = useForm<report_data>({
           defaultValues: (formStore.useState(state => state))
    })

    return(
    <FormProvider {...methods}>
        <ScreensStack.Navigator initialRouteName="Photos">
            <ScreensStack.Screen name="Photos" component={Photos}/>
            <ScreensStack.Screen name="Finish" component={FinishReport}/>
        </ScreensStack.Navigator>
    </FormProvider>)
}