import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut37 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'fXnhSeUQQ8U'}/>
      <Image 
       source={require('../../img/parmak_acma/37.png')} 
       style={{width:320, height: 382, resizeMode:'contain', alignSelf:'center'}}/>
      
     
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut37

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})