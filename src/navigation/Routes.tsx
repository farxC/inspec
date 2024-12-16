import { createNativeStackNavigator, NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import { FormProvider, useForm } from "react-hook-form"
import { Photos } from "../screens/Photos";
import { report_data } from "../types/report_data";
import { formStore } from "../storage/global";
import { NavigationProp } from "@react-navigation/native";
import { Header } from "../components/Header";

export type ScreenNames =["Photos"];

export type RootStackParamList = Record<ScreenNames[number], undefined>;

export type StackNavigation = NavigationProp<RootStackParamList>;

const ScreensStack = createNativeStackNavigator<RootStackParamList>();

// Photo's Report Navigation Type
export type PhotosReportNavigationType = NativeStackScreenProps<RootStackParamList, "Photos">;


const stack_configs : NativeStackNavigationOptions = {
    header: Header,
}

    
export const Routes = () => {

    //React-Hook-Form-Initialization
    const methods = useForm<report_data>({
           defaultValues: (formStore.useState(state => state))
    })

    return(
    <FormProvider {...methods}>
        <ScreensStack.Navigator initialRouteName="Photos" screenOptions={stack_configs}>
            <ScreensStack.Screen name="Photos" component={Photos}/>
        </ScreensStack.Navigator>
    </FormProvider>)
}