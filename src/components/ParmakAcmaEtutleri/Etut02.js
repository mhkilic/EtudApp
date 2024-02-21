import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut02 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'bxE0O3C1sM4'}/>
      <Image 
       source={require('../../img/parmak_acma/02.png')} 
       style={{width:375, height: 137, resizeMode:'contain'}}/>
    
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut02

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
})