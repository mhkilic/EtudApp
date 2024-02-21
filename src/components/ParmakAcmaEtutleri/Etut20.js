import { StyleSheet,View, Image, Text } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut20 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'NknCCLIz5vk'}/>
      <Image 
       source={require('../../img/parmak_acma/20_1.png')} 
       style={{width:375, height: 534, resizeMode:'contain'}}/>
      <Image 
       source={require('../../img/parmak_acma/20_2.png')} 
       style={{width:375, height: 287, resizeMode:'contain'}}/>
      <Text style={styles.paragraf}>
        Not: 30–33. ölçülerdeki kromatik aralıkları seslendirirken özellikle 1. parmağın geldiği 
        perdelere dikkat edilmesi daha seri çalma becerisini kazandıracaktır.
        </Text>
      
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut20

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