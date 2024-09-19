import { ButtonCustom } from "@/src/components/buttonCustom"
import { colors } from "@/src/utils/colors"
import { Text, View } from "react-native"

import {styles} from "./styles"
import { InputWithTitle } from "@/src/components/inputWithTitle"

export const CadastrarScreen = () => {
    return(
        <View
            style={styles.container}
        >
            <Text style = {styles.title}>
                Cadastrar 
            </Text> 
            <InputWithTitle/>
            <ButtonCustom
                titleButton="Cadastrar"  
                styleContainer={{
                    backgroundColor: colors.WHITE,
                    position: "absolute", 
                    bottom: 450
                }}
                styleText={{
                    color: colors.BLACK 
                }}
            /> 
        </View>  
    )
} 
