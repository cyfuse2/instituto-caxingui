

import { ButtonCustom } from "@/src/components/buttonCustom"
import {styles} from "./styles" 
import {Text, View} from "react-native"  
import { colors } from "@/src/utils/colors" 


export const HomeScreen = () => {  
    return( 
        <View 
            style={styles.container} 
        > 
        
        <Text
            style={styles.title}>
            </Text> 
            <ButtonCustom  
                titleButton="Your Class" 
                styleContainer= {{
                    backgroundColor: colors.WHITE, 
                    position: "absolute", 
                    bottom: 300, 
                    width: 100, 
                    height: 40 

                }}
        /> 
      </View>  
    )
} 