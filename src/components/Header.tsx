import { Image, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export const Header = () => {
    const logo = require("../assets/images/Revoltis_2.png")
    return(
        <SafeAreaView>
            <View style={styles.innerView}>
                <Image source={logo}/>
                <Text style={styles.text}> Montagem</Text>
            </View>  
            <View style={{borderBlockColor: "#8E8E8E", borderBottomWidth: 3, marginHorizontal: 20, borderRadius: 10}}></View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    text:{
        fontSize: 28,
        color: "black",
    },
    innerView:{
        flexDirection: "row",
        justifyContent: "space-between",
        margin: "4%",
        alignItems: "center"
    } 
})