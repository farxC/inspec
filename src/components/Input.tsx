import { FieldValues,Controller, UseControllerProps } from "react-hook-form"
import { StyleSheet, Text, TextInput, TextInputProps, View} from "react-native"

type InputProps = TextInputProps & {
    mode: "text" | "numeric"
    label?: string
    placeholder: string
}


export function ControlledInput<FormType extends FieldValues>({
    control,
    name,
    rules,
    mode,
    label,
    placeholder,
    ...props
}: UseControllerProps<FormType> & InputProps){
    return(
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({field, fieldState: {error}}) => (
                <>
                    {label && 
                        <Text style={styles.label}>{label}</Text>
                    }
                     <TextInput inputMode={mode} style={styles.textInput} onChangeText={(input) => {
                        field.onChange(input)
                        }} 
                        placeholder={placeholder}
                        value={field.value}
                      />
                       {error && 
                        <Text style={styles.error}>{error.message}</Text>
                        }
                </>

            )}
        />
    )
}

const styles = StyleSheet.create({
    textInput: {
        alignSelf: 'center',
        textAlign: "justify",
        fontSize: 10,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        padding: 7,
    
      },
      label: {
        alignSelf: "center",
        fontWeight: "bold",
        fontSize: 16
      },
      error: {
        color: "red",
        fontWeight: "bold",
        alignSelf: "center"
      }
})