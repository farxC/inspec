import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      height: '100%',
      flex: 1
    },
  
  
  
    componentsInput: {  /*Estilização dos Inputs de Modo Geral*/
      borderWidth: 2,
      borderRadius: 8,
      margin: "1.4%",
      borderColor: "#c4c4c4",
      alignSelf: 'center',
      justifyContent: 'center',
      flexDirection: "row",
      width: '85%',
    },
  
    input: {         /*Estilização Interna dos Inputs Gerais*/
      fontSize: 16,
      color: "#065A1E",
      fontWeight: '800',
      textAlign: 'center',
      width: '80%',
  
    },
  
    header_txt: {       /*Estilização da Header Geral das Screens*/
      backgroundColor: "#CDF4E1",
      color: "#09511D",
      fontSize: 25,
      textAlign: "center",
      paddingVertical: '3%',
      marginBottom: '1%'
    },
  
  });
  
  export default styles