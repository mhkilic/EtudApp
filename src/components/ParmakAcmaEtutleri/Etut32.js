import { StyleSheet,View, Image, Text } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut32 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'VtVrbRKWO_s'}/>
      <Image 
       source={require('../../img/parmak_acma/32_1.png')} 
       style={{width:320, height: 445, resizeMode:'contain', alignSelf:'center'}}/>
      <Image 
       source={require('../../img/parmak_acma/32_2.png')} 
       style={{width:320, height: 321, resizeMode:'contain', alignSelf:'center'}}/>
      <Text style={styles.paragraf}>
        Not: Bu etüdün 11-15. ölçülerinde kesik bağ işareti ile belirtilen 
        sesler tutarak (parmakları kaldırmadan) çalınır.
        </Text>
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut32

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