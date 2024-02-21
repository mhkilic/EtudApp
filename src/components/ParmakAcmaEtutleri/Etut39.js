import { StyleSheet,View, Image, Text } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut39 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'2XeuAPmcc7E'}/>
      <Image 
       source={require('../../img/parmak_acma/39.png')} 
       style={{width:375, height: 470, resizeMode:'contain'}}/>
      <Text style={styles.paragraf}>
        Not: Bu etüdün 1-10. ölçüleri isteğe bağlı olarak tekrar edilerek çalınabilir.
        </Text>
     
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut39

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