import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut23 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'8pVxJE5EvLg'}/>
      <Image 
       source={require('../../img/parmak_acma/23.png')} 
       style={{width:320, height: 243, resizeMode:'contain', alignSelf:'center'}}/>
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut23

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
   
})