import { StyleSheet,View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut01 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'0UcFTvXL1pE'}/>
      <Image 
       source={require('../../img/parmak_acma/01.png')} 
       style={{width:320, height: 510, resizeMode:'contain', alignSelf:'center'}}/>
    
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut01

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    
})