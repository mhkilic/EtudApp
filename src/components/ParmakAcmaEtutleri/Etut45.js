import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut45 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'ciL2ar5pGGc'}/>
      <Image 
       source={require('../../img/parmak_acma/45_1.png')} 
       style={{width:375, height: 524, resizeMode:'contain'}}/>
      <Image 
       source={require('../../img/parmak_acma/45_2.png')} 
       style={{width:375, height: 222, resizeMode:'contain'}}/>
      
      
     
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut45

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})