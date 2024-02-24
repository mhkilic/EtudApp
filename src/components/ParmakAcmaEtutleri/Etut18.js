import { StyleSheet,View, Image, Text } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut18 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'ZR2D5Bf3VB0'}/>
      <Image 
       source={require('../../img/parmak_acma/18_1.png')} 
       style={{width:320, height: 476, resizeMode:'contain', alignSelf:'center'}}/>
      <Image 
       source={require('../../img/parmak_acma/18_2.png')} 
       style={{width:320, height: 145, resizeMode:'contain', alignSelf:'center'}}/>
      <Text style={styles.paragraf}>
        Not: 18. Etütte tartım üçerli olmasına rağmen vuruşlar baştan sona kadar üstten ve 
        alttan olmak üzere devam etmektedir. Burada, üçerli tartımlarda düz tezene vuruşu 
        uygulanarak temiz ve akıcı çalma becerisinin kazandırılması amaçlanmaktadır.
        Ayrıca 12. ve 20. ölçüde bulunan üç telin aynı anda seslendirildiği La karar sesli 
        vuruşta parmak numaralarının doğru oluşuna dikkat edilmelidir.
        </Text>
      
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut18

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    paragraf:{
        marginTop:20,
        paddingHorizontal:20,
        textAlign:'justify',
        lineHeight:24,
        color:'black',
        fontSize:18,
        
    },
   
})