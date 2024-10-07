import { ButtonCustom } from "@/src/components/buttonCustom"
import { colors } from "@/src/utils/colors"
import { Text, View } from "react-native"

import {styles} from "./styles"
import { InputWithTitle } from "@/src/components/inputWithTitle" 
import { useState } from "react" 

export const CadastrarScreen = () => { 
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("") 
    const [senha, setSenha] = useState ("") 
    const [confirmarSenha, setcConfirmarsenha] = useState ("") 



    return( 
        <View 
            style={styles.container} 
        >
            <Text style = {styles.title}> 
                CADASTRO  
            </Text>  
            <InputWithTitle
             setText={setNome} 
             title = "Nome:" 
            /> 

            <InputWithTitle
                setText={setEmail} 
                title = "E-mail:" 
                /> 

            <InputWithTitle
                setText={setSenha} 
                title="Senha:" 
                /> 

            <InputWithTitle
                setText={setcConfirmarsenha} 
                title="Confirmar Senha:" 
                /> 

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
