import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut38 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'JvSG1aarWGc'}/>
      <Image 
       source={require('../../img/parmak_acma/38.png')} 
       style={{width:375, height: 237, resizeMode:'contain'}}/>
      
     
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut38

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
    
})