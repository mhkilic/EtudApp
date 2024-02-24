import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut17 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'J-nMll-25Kk'}/>
      <Image 
       source={require('../../img/parmak_acma/17.png')} 
       style={{width:320, height: 354, resizeMode:'contain', alignSelf:'center'}}/>
      
      
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut17

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
   
})