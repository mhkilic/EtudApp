import { StyleSheet,View, Image, Text } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut29 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'AU7SbYinPXY'}/>
      <Image 
       source={require('../../img/parmak_acma/29_1.png')} 
       style={{width:320, height: 526, resizeMode:'contain', alignSelf:'center'}}/>
      
      <Image 
       source={require('../../img/parmak_acma/29_2.png')} 
       style={{width:375, height: 201, resizeMode:'contain', alignSelf:'center'}}/>
      <Text style={styles.paragraf}>
        Not: 29. Etüt, 24. etütte olduğu gibi La karar perdesinde 
        Zirgüleli hicaz dizisinde parmak alıştırmasına yönelik bir etüttür. 
        Bu etüdün özellikle başlangıç bölümündeki parmak numaraları, 
        etüdün temiz ve akıcı çalınmasında önemli rol üstlenmektedir. 
        Yine ilk ölçülerde yer alan ve üzerinde 2 rakamı ile belirtilen 
        dönüş işaretleri bu ölçülerin 2 kez tekrar edileceğini belirtmektedir. 
        Etüdün sonunda “Bu bölüm bitişte atlanacak” şeklinde belirtilen bölümde 
        ise etüdün 32. ölçüsünde yer alan Senyo dönüş işareti ile başa dönüldükten 
        sonra dönüşte belirtilen bölüm (31–32 ölçüler) atlanarak 30. ölçünün 32. ölçüye 
        bağlanması şeklinde bitirilecektir.
        </Text>
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut29

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