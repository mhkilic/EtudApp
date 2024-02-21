import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut04 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'GXRQBILmjJ0'}/>
      <Image 
       source={require('../../img/parmak_acma/04.png')} 
       style={{width:375, height: 189, resizeMode:'contain'}}/>
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut04

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})