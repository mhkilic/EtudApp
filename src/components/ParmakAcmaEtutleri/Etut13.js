import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut13 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'AT9kqF2MjCI'}/>
      <Image 
       source={require('../../img/parmak_acma/13.png')} 
       style={{width:375, height: 250, resizeMode:'contain'}}/>
      
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut13

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})