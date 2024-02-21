import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut42 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'wSWNLQg-CLE'}/>
      <Image 
       source={require('../../img/parmak_acma/42_1.png')} 
       style={{width:375, height: 537, resizeMode:'contain'}}/>
      <Image 
       source={require('../../img/parmak_acma/42_2.png')} 
       style={{width:375, height: 360, resizeMode:'contain'}}/>
      
     
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut42

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})