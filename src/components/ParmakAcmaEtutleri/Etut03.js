import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import YouTubeVideo from '../YoutubeVideo'
import { ScrollView } from 'react-native-gesture-handler'
import RotateContent from '../RotateContent'

const Etut03 = () => {
  return (
    <RotateContent>
    <ScrollView>
    <View style={styles.container}>
      <YouTubeVideo videoId={'a44zZ1gH6nk'}/>
      <Image 
       source={require('../../img/parmak_acma/03.png')} 
       style={{width:375, height: 128, resizeMode:'contain'}}/>
      <Text style={styles.paragraf}>
        Not: Bu etüdün çıkıcı bölümünde yer alan üçlü aralık atlamaların 
        seslendirilmesinde temiz baskı ve duyumun yanında ezgideki akıcılığa dikkat 
        edilmelidir. Ayrıca bu etüt icra ve çalışma öncesinde istenilen hızın 
        uygulanması ile her seviyede kullanılabilecek bir parmak açma etüdüdür.
        </Text>
    </View>
    </ScrollView>
    </RotateContent>
  )
}

export default Etut03

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