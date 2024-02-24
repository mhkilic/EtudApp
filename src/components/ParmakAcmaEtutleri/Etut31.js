import { StyleSheet,View, Image, Text } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut31 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'ruvqSZlOIno'}/>
      <Image 
       source={require('../../img/parmak_acma/31.png')} 
       style={{width:320, height: 445, resizeMode:'contain', alignSelf:'center'}}/>
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut31

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})