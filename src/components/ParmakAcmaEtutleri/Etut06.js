import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut06 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'s6dtZgD5_bM'}/>
      <Image 
       source={require('../../img/parmak_acma/06.png')} 
       style={{width:320, height: 119, resizeMode:'contain', alignSelf:'center'}}/>
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut06

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})