import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut07 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'WcmqAQeg60M'}/>
      <Image 
       source={require('../../img/parmak_acma/07.png')} 
       style={{width:320, height: 180, resizeMode:'contain', alignSelf:'center'}}/>
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut07

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})