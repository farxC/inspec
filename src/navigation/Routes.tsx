import { createNativeStackNavigator, NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import { FormProvider, useForm } from "react-hook-form"
import { FinishReport } from "../screens/FinishReport";
import { Photos } from "../screens/Photos";
import { report_data } from "../types/reportData";
import { formStore } from "../storage/global";
import { NavigationProp } from "@react-navigation/native";
import { Header } from "../components/Header";

export type ScreenNames =["Photos", "Finish"];

export type RootStackParamList = Record<ScreenNames[number], undefined>;

export type StackNavigation = NavigationProp<RootStackParamList>;

const ScreensStack = createNativeStackNavigator<RootStackParamList>();

// Photo's Report Navigation Type
export type PhotosReportNavigationType = NativeStackScreenProps<RootStackParamList, "Photos">;
// Finish Report Navigation Type
export type FinishReportNavigationType = NativeStackScreenProps<RootStackParamList, "Finish">

const stack_configs : NativeStackNavigationOptions = {
    header: Header,
    
}

    
export const Routes = () => {

    //React-Form-Initialization
    const methods = useForm<report_data>({
           defaultValues: (formStore.useState(state => state))
    })

    return(
    <FormProvider {...methods}>
        <ScreensStack.Navigator initialRouteName="Photos" screenOptions={stack_configs}>
            <ScreensStack.Screen name="Photos" component={Photos}/>
            <ScreensStack.Screen name="Finish" component={FinishReport}/>
        </ScreensStack.Navigator>
    </FormProvider>)
}