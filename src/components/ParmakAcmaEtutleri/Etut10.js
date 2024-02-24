import { StyleSheet,View, Image} from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut10 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'i2MC39a38Jw'}/>
      <Image 
       source={require('../../img/parmak_acma/10.png')} 
       style={{width:320, height: 439, resizeMode:'contain', alignSelf:'center'}}/>
      
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut10

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
   
    
})