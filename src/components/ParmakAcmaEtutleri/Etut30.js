import { StyleSheet,View, Image, Text } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut30 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'v1K-J9lOcIo'}/>
      <Image 
       source={require('../../img/parmak_acma/30.png')} 
       style={{width:375, height: 453, resizeMode:'contain'}}/>
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut30

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})