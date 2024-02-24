import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut43 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'JPFb6mPirmo'}/>
      <Image 
       source={require('../../img/parmak_acma/43.png')} 
       style={{width:320, height: 491, resizeMode:'contain', alignSelf:'center'}}/>
      
      
     
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut43

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})