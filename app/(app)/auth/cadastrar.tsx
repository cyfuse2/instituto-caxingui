import { CadastrarScreen } from "@/src/screens/auth/cadastrar"; 
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
                        backgroundColor: "#ffc42d"
                    },
                    headerTitleAlign: "center"
                }}
            />
            <CadastrarScreen/> 
        </>
    )
}