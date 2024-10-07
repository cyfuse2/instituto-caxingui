import { ButtonCustom } from "@/src/components/buttonCustom"
import { colors } from "@/src/utils/colors"
import { Text, View } from "react-native"

import {styles} from "./styles"
import { InputWithTitle } from "@/src/components/inputWithTitle" 
import { useState } from "react" 
import { router } from "expo-router"

export const LoginScreen = () => { 
    const [email, setEmail] = useState("") 
    const [senha, setSenha] = useState ("") 


    return(
        <View
            style={styles.container} 
        >
            <Text style = {styles.title}>
                LOGIN 
            </Text> 
            <InputWithTitle
                setText={setEmail} 
                title = "E-mail:" 
                /> 

                <InputWithTitle
                setText={setSenha} 
                title="Senha:" 
                />

            <ButtonCustom
                titleButton="ESQUECI MINHA SENHA" 
                styleContainer={{
                    backgroundColor: colors.WHITE,
                    position: "absolute", 
                    bottom: 450,
                    height: 50,
                    width: 10000, 
                }}
                styleText={{
                    color: colors.BLACK 
                }}
            /> 
            <ButtonCustom 

          titleButton="ENTRAR" 
          styleContainer={{
            backgroundColor: "#fff", 
            position: "absolute", 
            bottom: 550,
            width: 10000,
             height: 50 }} 
          styleText={{color: "#000"}}
          handleClick={() => router.navigate("/(app)/home/home")} 
        />

        </View>  
    )
} 


            