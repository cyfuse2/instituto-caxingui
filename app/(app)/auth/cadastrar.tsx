import { CadastrarScreen } from "@/src/screens/auth/cadastrar"; 
import { colors } from "@/src/utils/colors";
import { Stack } from "expo-router"; 


export default function Cadastrar () { 
    return( 
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "Cadastrar",
                    headerTintColor: "#FFF",
                    headerStyle: {
                        backgroundColor: colors.PRIMARY 
                    },
                    headerTitleAlign: "center"
                }}
            />
            <CadastrarScreen/> 
        </>
    )
}