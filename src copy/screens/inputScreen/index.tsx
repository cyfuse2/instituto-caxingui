import { ButtonCustom } from "@/src/components/buttonCustom"
import LottieView from "lottie-react-native"
import { Dimensions, Image, Platform, StyleSheet, Text, View } from "react-native"
import { style } from "./styles"
import { router } from "expo-router"

export const InputScreen = () => {

    return(
      <View
        style={style.containerStyle}
      >
       
        <Image
          source={require("../../components/img/image-removebg.png")}    
          style={style.styleImage}  
          resizeMode="cover"
        />
         <Text
          style={style.styleTitle}
        >INSTITUTO CAXINGUI</Text>
        <ButtonCustom
          titleButton="Cadastrar"
          handleClick={() => {}}
          styleContainer= {{
            marginTop: 40,
            marginBottom: 32,
            width: 200, 
            height: 80 
          }}
        />
        <ButtonCustom 
          titleButton="Entrar" 
          styleContainer={{backgroundColor: "#fff", width: 200, height: 80 }} 
          styleText={{color: "#000"}}
          handleClick={() => router.navigate("/(app)/auth/login")}
        />
      </View>
    )
}
