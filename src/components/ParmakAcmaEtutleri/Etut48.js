import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut48 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'n2bNk3swMDw'}/>
      <Image 
       source={require('../../img/parmak_acma/48.png')} 
       style={{width:320, height: 430, resizeMode:'contain', alignSelf:'center'}}/>
      
     
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut48

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})