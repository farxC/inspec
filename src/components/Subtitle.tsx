import { FieldValues,Controller, UseControllerProps } from "react-hook-form"
import { StyleSheet, TextInput } from "react-native"


export function ControlledSubtitleInput<FormType extends FieldValues>({
    control,
    name,
    rules
}: UseControllerProps<FormType>){
    return(
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field, fieldState: {error}}) => (
                <TextInput style={styles.textInput} onChangeText={(subtitle) => {
                    field.onChange(subtitle)
                }} 
                    placeholder="Adicionar legenda"
                    value={field.value}
                />
            )}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        alignSelf: 'center',
        textAlign: "justify",
        fontSize: 11,
        fontWeight: "bold",
        height: '42%',
        width: '85%'
      },
})