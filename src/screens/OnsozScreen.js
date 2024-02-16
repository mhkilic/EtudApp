import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

function OnsozScreen({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Icon name="reader" color="black" size={24} style={styles.icon}/>
      <Text style={styles.baslik1}>Önsöz</Text>
      <Text style={styles.paragraf}>
      {'    '}Bağlama, geleneksel çalgılarımız arasında en çok bilinen, çalınan ve sevilenlerden biridir. 
      Bunun yanında perde sistemi, ses genişliği, ileri düzey icra tekniğini sergileme ve aceliteye 
      uygunluğunun yanında Türk halk müziği eserlerini ve geleneksel tezene tavırlarını icra etmede 
      diğer geleneksel çalgılarımız arasında kendine has özelliklere sahiptir. Bu özellikler bağlamayı 
      diğer geleneksel çalgılar arasında en çok tercih edilen konuma getirmektedir. Geleneksel Türk halk 
      müziği, çeşitlilik açısından ele alındığında zengin bir müziksel dokuya sahip olmasına rağmen mevcut 
      repertuara bakıldığında bağlamanın karakteristik özelliklerini ve teknik kapasitesini yansıtan, 
      çalgı müziğine yönelik eser sayısı oldukça azdır.
      </Text>
      <Text style={styles.paragraf}>
      {'    '}TRT Türk halk müziği repertuarı içerisinde 500’ün üzerinde sözsüz çalgısal eser yer almakla 
      birlikte bu eserlerin çok az bir kısmı dışında çoğu, geleneksel halk oyunlarımızın sergilenebilmeleri 
      için oluşturulmuş ve derlenmiş eserlerdir. Bu sebeple bu eserler geleneksel çalgılarımızın teknik yönleri 
      ile ileri düzey icra özelliğini yansıtan bir yapıya sahip değildirler. Dolayısıyla gerçek bir çalgı müziği
      repertuarı içerisinde yer alacak eserlerin, çalgıların icrasal ve teknik yönden tüm özelliklerini yansıtacak 
      bir yapı içerisinde ele alınarak geliştirilmeleri ya da bestelenmeleri gerekmektedir.
      </Text>
      <Text style={styles.paragraf}>
      {'    '}Batıda çalgı tekniğinin bu denli gelişme nedenlerinin başında her çalgı için ayrı ayrı olmak üzere 
      çeşitli seviye ve özellikleri içeren çalgı müziği repertuarının geliştirilmiş olması gelmektedir. 
      Bu çalışmaların sistemli ve disiplinli bir şekilde uygulamaya geçirilmesi sonucunda çalgı müziğinde 
      ciddi ilerlemeler kaydedilmiş, hatta bu çalışmalar büyük müzik yapıtlarının oluşumuna öncülük etmiş 
      ve ışık tutmuştur. Dolayısıyla bu çalışma, bağlama öğretiminde görülen ve yaşanan söz konusu yönlerdeki 
      eksikliklerinin kısmen de olsa giderilmesi kaygısıyla dikkatli ve hassas bir çalışma süreci sonunda toplam 
      on dört yıllık bir sürede tamamlanmıştır.
      </Text>
      <Text style={styles.yazarAdi}>Yrd. Doç. Dr. Mehmet KINIK</Text>
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
        color:'black',
        fontSize:24,
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

export default OnsozScreen;