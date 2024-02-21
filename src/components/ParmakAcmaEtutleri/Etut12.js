import { StyleSheet,View, Image, Text} from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut12 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'buAY0rwTe0c'}/>
      <Image 
       source={require('../../img/parmak_acma/12.png')} 
       style={{width:375, height: 459, resizeMode:'contain'}}/>
      <Text style={styles.paragraf}>
        Not: Bu etütte ikinci tele geçişlerde seslerin temiz, alttan ve üstten 
        tezene vuruşlarında şiddetin eşit olmasına dikkat edilmelidir.
        </Text>
      
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut12

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