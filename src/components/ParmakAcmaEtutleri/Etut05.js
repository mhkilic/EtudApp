import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut05 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'Jkn-L3oG9fc'}/>
      <Image 
       source={require('../../img/parmak_acma/05.png')} 
       style={{width:375, height: 194, resizeMode:'contain'}}/>
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut05

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})