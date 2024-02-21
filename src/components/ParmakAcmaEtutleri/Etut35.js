import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut35 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'D3ZoRDw4lVI'}/>
      <Image 
       source={require('../../img/parmak_acma/35_1.png')} 
       style={{width:375, height: 418, resizeMode:'contain'}}/>
      <Image 
       source={require('../../img/parmak_acma/35_2.png')} 
       style={{width:375, height: 435, resizeMode:'contain'}}/>
     
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut35

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})