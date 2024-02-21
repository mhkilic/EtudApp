import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut44 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'hOdO-BcGSCY'}/>
      <Image 
       source={require('../../img/parmak_acma/44_1.png')} 
       style={{width:375, height: 539, resizeMode:'contain'}}/>
      <Image 
       source={require('../../img/parmak_acma/44_2.png')} 
       style={{width:375, height: 477, resizeMode:'contain'}}/>
      
      
     
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut44

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})