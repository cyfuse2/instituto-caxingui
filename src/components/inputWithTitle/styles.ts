import { colors } from "@/src/utils/colors";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    container: {
        width:"100%",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "flex-start", 
        
    },
    title: {
        color: colors.WHITE, 
        textAlign: "left",
        fontSize: 12,
        fontWeight: "bold",
        marginBottom: 8
    },
    styleInput:{ 
        backgroundColor: colors.WHITE,
        height: 53,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 8,
        borderWidth:1,
        borderColor: colors.WHITE,
        paddingLeft: 15
    }
})