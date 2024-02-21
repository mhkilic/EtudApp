import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut25 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'uJ-tm8gZC9k'}/>
      <Image 
       source={require('../../img/parmak_acma/25a1.png')} 
       style={{width:375, height: 501, resizeMode:'contain'}}/>
      <Image 
       source={require('../../img/parmak_acma/25a2.png')} 
       style={{width:375, height: 113, resizeMode:'contain'}}/>
      <Image 
       source={require('../../img/parmak_acma/25b.png')} 
       style={{width:375, height: 404, resizeMode:'contain'}}/>
       
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut25

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
   
})