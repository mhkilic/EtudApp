import { StyleSheet,View, Image} from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut09 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'sWUPdQTbZnc'}/>
      <Image 
       source={require('../../img/parmak_acma/09a.png')} 
       style={{width:375, height: 366, resizeMode:'contain'}}/>
       
      <Image 
       source={require('../../img/parmak_acma/09b.png')} 
       style={{width:375, height: 541, resizeMode:'contain'}}/>
      
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut09

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    paragraf:{
        marginTop:20,
        paddingHorizontal:20,
        textAlign:'justify',
        lineHeight:24,
        color:'black',
        fontSize:18,
        
    },
    
})