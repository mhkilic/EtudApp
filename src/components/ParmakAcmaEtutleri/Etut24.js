import { StyleSheet,View, Image, Text } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut24 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'_faxmlm0MF0'}/>
      <Image 
       source={require('../../img/parmak_acma/24.png')} 
       style={{width:375, height: 296, resizeMode:'contain'}}/>
       <Text style={styles.paragraf}>
        Not: Bu etüt Zirgüleli Hicaz dizisinde parmak alıştırmaya yöneliktir. 
        Bu etüdün içerisinde özellikle mi perdesi üzerinde bulunan Hicaz aralığında, 
        parmakların mümkün olduğunca açık tutulması etüdün daha temiz ve akıcı çalınmasını sağlayacaktır.
        </Text>
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut24

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