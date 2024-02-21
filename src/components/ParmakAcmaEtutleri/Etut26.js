import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut26 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'fcHkMsfQpx8'}/>
      <Image 
       source={require('../../img/parmak_acma/26.png')} 
       style={{width:375, height: 537, resizeMode:'contain'}}/>
      
       
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut26

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
   
})