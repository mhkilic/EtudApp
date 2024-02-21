import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut15 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'nYp7WxuNA9E'}/>
      <Image 
       source={require('../../img/parmak_acma/14.png')} 
       style={{width:375, height: 471, resizeMode:'contain'}}/>
      
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut15

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})