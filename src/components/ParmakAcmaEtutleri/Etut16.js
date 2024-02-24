import { StyleSheet,View, Image, Text } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut16 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'GP6j7CQnbrM'}/>
      <Image 
       source={require('../../img/parmak_acma/16a.png')} 
       style={{width:320, height: 433, resizeMode:'contain', alignSelf:'center'}}/>
      <Image 
       source={require('../../img/parmak_acma/16b1.png')} 
       style={{width:320, height: 494, resizeMode:'contain', alignSelf:'center'}}/>
      <Image 
       source={require('../../img/parmak_acma/16b2.png')} 
       style={{width:320, height: 122, resizeMode:'contain', alignSelf:'center'}}/>
      <Text style={styles.paragraf}>
        Not: Bu etüdün 1 – 13. ölçüleri isteğe bağlı olarak tekrar edilerek çalınabilir.
        </Text>
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut16

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