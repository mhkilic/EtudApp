import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut40 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'z-zRBEd01-A'}/>
      <Image 
       source={require('../../img/parmak_acma/40.png')} 
       style={{width:375, height: 558, resizeMode:'contain'}}/>
      
     
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut40

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})