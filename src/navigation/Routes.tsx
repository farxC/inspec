import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { FormProvider, useForm } from "react-hook-form"
import { FinishReport } from "../screens/FinishReport";
import { Photos } from "../screens/Photos";
import { report_data } from "../types/reportData";
import { formStore } from "../storage/global";
import { useEffect } from "react";
export type RootStackParamList = {
    Photos: undefined;
    Finish: undefined;
}

const ScreensStack = createNativeStackNavigator<RootStackParamList>();
    
export const Routes = () => {
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