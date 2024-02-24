import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut28 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'tPReqDI2uTQ'}/>
      <Image 
       source={require('../../img/parmak_acma/28.png')} 
       style={{width:320, height: 462, resizeMode:'contain', alignSelf:'center'}}/>
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut28

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
   
})