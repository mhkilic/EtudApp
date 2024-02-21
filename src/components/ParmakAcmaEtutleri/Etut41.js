import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut41 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'C768Fjow-u4'}/>
      <Image 
       source={require('../../img/parmak_acma/41_1.png')} 
       style={{width:375, height: 547, resizeMode:'contain'}}/>
      <Image 
       source={require('../../img/parmak_acma/41_2.png')} 
       style={{width:375, height: 362, resizeMode:'contain'}}/>
      
     
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut41

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})