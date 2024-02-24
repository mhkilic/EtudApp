import { StyleSheet,View, Image, Text } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut19 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'LRzXCIE_5mM'}/>
      <Image 
       source={require('../../img/parmak_acma/19_1.png')} 
       style={{width:320, height: 507, resizeMode:'contain', alignSelf:'center'}}/>
      <Image 
       source={require('../../img/parmak_acma/19_2.png')} 
       style={{width:320, height: 237, resizeMode:'contain', alignSelf:'center'}}/>
      <Text style={styles.paragraf}>
        Not: 19. Etüt Hicaz dizisinde üçerli tartımlarda düz tezene vuruşuna yöneliktir. 
        Bu etütte Hicaz dizisinde bulunan si bemol ve do diyez aralığına dikkat edilmelidir. 
        33. ölçüdeki baskı ise 1. tel si bemol perdesi üzerine kuruludur.
        </Text>
      
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut19

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