import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function ParmakAcmaScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        
       <Text style={styles.baslik1}>Etüt 41</Text>
        <Image 
        source={require('../img/parmak_acma/41_1.png')} 
        style={{width: '95%', height:547, resizeMode:'contain'}}/>
        <Image 
        source={require('../img/parmak_acma/41_2.png')} 
        style={{width: '95%', height:362, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 42</Text>
        <Image 
        source={require('../img/parmak_acma/42_1.png')} 
        style={{width: '95%', height:537, resizeMode:'contain'}}/>
        <Image 
        source={require('../img/parmak_acma/42_2.png')} 
        style={{width: '95%', height:360, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 43</Text>
        <Image 
        source={require('../img/parmak_acma/43.png')} 
        style={{width: '95%', height:491, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 44</Text>
        <Image 
        source={require('../img/parmak_acma/44_1.png')} 
        style={{width: '95%', height:539, resizeMode:'contain'}}/>
        <Image 
        source={require('../img/parmak_acma/44_2.png')} 
        style={{width: '95%', height:477, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 45</Text>
        <Image 
        source={require('../img/parmak_acma/45_1.png')} 
        style={{width: '95%', height:524, resizeMode:'contain'}}/>
        <Image 
        source={require('../img/parmak_acma/45_2.png')} 
        style={{width: '95%', height:222, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 46</Text>
        <Image 
        source={require('../img/parmak_acma/46.png')} 
        style={{width: '95%', height:288, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 47</Text>
        <Image 
        source={require('../img/parmak_acma/47.png')} 
        style={{width: '95%', height:425, resizeMode:'contain'}}/>
        <Text style={styles.paragraf}>
        Not: Bu etütte son ölçü hariç her ölçü isteğe bağlı olarak tekrar edilerek çalınabilir.
        </Text>

        <Text style={styles.baslik1}>Etüt 48</Text>
        <Image 
        source={require('../img/parmak_acma/48.png')} 
        style={{width: '95%', height:430, resizeMode:'contain'}}/>
        
        </View>
    </ScrollView>
  );
}

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
    baslik2:{
      marginTop:20,
        color:'black',
        fontSize:18,
        fontWeight:'bold',
    },
    paragraf:{
        marginTop:20,
        paddingHorizontal:20,
        textAlign:'justify',
        lineHeight:24,
        color:'black',
        fontSize:18,
        
    },
    maddeList:{
        marginTop:20,
        paddingHorizontal:20,
        textAlign:'left',
        lineHeight:24,
        color:'black',
        fontSize:18,
        fontWeight:'bold'
        
    },
    yazarAdi:{
        marginTop:20,
        paddingHorizontal:20,
        textAlign:'right',
        lineHeight:24,
        color:'black',
        fontSize:18,
        fontWeight:'bold'
        
    },
    icon:{
      marginVertical:15
    }

});

export default ParmakAcmaScreen;