import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut21 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'2z9RLrT2o4k'}/>
      <Image 
       source={require('../../img/parmak_acma/21.png')} 
       style={{width:375, height: 298, resizeMode:'contain'}}/>
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut21

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
   
})