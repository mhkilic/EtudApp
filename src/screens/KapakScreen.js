import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';




function KapakScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Icon name="compass" color="black" size={100}/>
      <Text style={styles.kitapAdi}>Bağlama İçin {'\n'}   100 Etüt</Text>
      <Text style={styles.yazarAdi}>Yrd. Doç. Dr. Mehmet KINIK</Text>
      <Text style={styles.basimYeri}>Ankara - 2011</Text>
      <Text style={styles.tasarimciAdi}>{'{ < mhkilic | 2024 > }'}</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    kitapAdi:{
        color:'black',
        fontSize:48,
        fontWeight:'bold',
        marginVertical:20,

        
    },
    yazarAdi:{
        color:'black',
        fontSize:20,
        fontWeight:'bold',
        marginVertical:20,
    },
    basimYeri:{
        color:'black',
        fontSize:18,
        fontWeight:'bold'
    },
    tasarimciAdi:{
        color:'black',
        fontSize:16,
        fontWeight:'bold',
        marginTop:20
    }
});

export default KapakScreen;
