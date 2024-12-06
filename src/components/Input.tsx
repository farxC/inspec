import { useRef } from "react"
import { FieldValues, Controller, UseControllerProps } from "react-hook-form"
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome5"

type InputProps = TextInputProps & {
    mode: "text" | "numeric"
    label?: string
    placeholder: string
}

const CustomTextInput = ({
    mode,
    label,
    placeholder,
    style,
    onChangeText,
    value,
}: InputProps) => {

    const textInputRef = useRef<TextInput>(null);
    const handleFocus = () => {
        if (textInputRef.current){
            textInputRef.current.focus()
        }
    }


    return (
        <TouchableOpacity style={style} onPress={handleFocus}>
            {label &&
                <View style={styles.labelView}>
                     <Icon size={20} name="info-circle" style={{padding: 4, marginHorizontal: 4}}></Icon>
                     <Text style={styles.label}>{label}</Text>
                </View>
               
            }
            <TextInput inputMode={mode} style={[styles.textInput]} onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor={"#252525"}
                value={value}
                ref={textInputRef}
            />
        </TouchableOpacity>

    )
}


export function ControlledInput<FormType extends FieldValues>({
    control,
    name,
    rules,
    mode,
    placeholder,
    ...props
}: UseControllerProps<FormType> & InputProps) {
    return (
        <Controller
            control={control}
            name={name}
            rules={rules}
            render={({ field, fieldState: { error } }) => (
                <>
                    <CustomTextInput mode={mode} placeholder={placeholder} {...props} />
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
        fontSize: 12,
        fontWeight: "bold",
        alignItems: "center",
        justifyContent: "center",
        padding: 7,

    },
    labelView: {
        flexDirection: 'row',
        justifyContent: "center"
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