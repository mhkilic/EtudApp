import { StyleSheet,View, Image, Text } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut27 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'Sk5UFr4yf8Q'}/>
      <Image 
       source={require('../../img/parmak_acma/27.png')} 
       style={{width:375, height: 409, resizeMode:'contain'}}/>
      <Text style={styles.paragraf}>
        Not: Ölçü dönüşü işaretleri üzerinde bulunan 2 rakamı o ölçünün 
        iki defa tekrar edileceğini gösterir. Bu durumda o ölçü toplamda 
        üç defa çalınmış olur.
        </Text>
       
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut27

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