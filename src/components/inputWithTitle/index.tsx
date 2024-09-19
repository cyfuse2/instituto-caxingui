import { Text, TextInput, View } from "react-native"
import { styles } from "./styles"



export const InputWithTitle = () =>{
    return(
        <View
        style={styles.container}
        >
            <Text
                style={styles.title}
            >
                E-MAIL 
            </Text>
            <TextInput
                style={styles.styleInput} 
            /> 

            <Text
                style={styles.title}
            >
                SENHA 
            </Text>
            <TextInput
                style={styles.styleInput} 
           
            />   
        
            

        </View> 
        
    )

}   
