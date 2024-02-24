import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut34 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'OPqBssHYRFw'}/>
      <Image 
       source={require('../../img/parmak_acma/34_1.png')} 
       style={{width:320, height: 530, resizeMode:'contain', alignSelf:'center'}}/>
      <Image 
       source={require('../../img/parmak_acma/34_2.png')} 
       style={{width:320, height: 61, resizeMode:'contain', alignSelf:'center'}}/>
     
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut34

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})