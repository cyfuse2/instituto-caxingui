import { colors } from "@/src/utils/colors";
import { StyleSheet } from "react-native";




export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: colors.PRIMARY 
    },
    title: {
        fontSize: 32,
        fontWeight: "bold",
        color: colors.WHITE 
    }
})