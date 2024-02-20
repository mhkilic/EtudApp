import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut01 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      
      <Text style={styles.baslik1}>Etüt 01</Text>
      
      <YouTubeVideo videoId={'0UcFTvXL1pE'}/>
      
      <Image 
       source={require('../../img/parmak_acma/01.png')} 
       style={{width:375, height: 510, resizeMode:'contain'}}/>
    
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
    baslik1:{
      marginVertical:20,
        color:'black',
        fontSize:24,
        fontWeight:'bold',
    },
})