import { StyleSheet,View, Image, Text } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut08 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'8un7H9nrgjs'}/>
      <Image 
       source={require('../../img/parmak_acma/08a.png')} 
       style={{width:375, height: 184, resizeMode:'contain'}}/>
       <Text style={styles.paragraf}>
        Not: Bu etütte onaltılık ve sekizlik notaların birim vuruş süresi içerisinde 
        seslendirilmesine (tartımlarına) dikkat edilmelidir.
        </Text>
      <Image 
       source={require('../../img/parmak_acma/08b.png')} 
       style={{width:320, height: 237, resizeMode:'contain'}}/>
      <Image 
       source={require('../../img/parmak_acma/08c.png')} 
       style={{width:320, height: 295, resizeMode:'contain', alignSelf:'center'}}/>
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut08

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