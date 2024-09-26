import { LoginScreen } from "@/src/screens/auth/login";
import { colors } from "@/src/utils/colors";
import { Stack } from "expo-router";


export default function Login () {
    return(
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "Entrar",
                    headerTintColor: "#FFF",
                    headerStyle: {
                        backgroundColor: colors.PRIMARY 
                    },
                    headerTitleAlign: "center"
                }}
            />
            <LoginScreen/>
        </>
    )
}