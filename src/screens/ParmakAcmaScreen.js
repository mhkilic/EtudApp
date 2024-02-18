import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

function ParmakAcmaScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Icon name="reader" color="black" size={24} style={styles.icon}/>
        
        <Text style={styles.baslik1}>Etüt 01</Text>
        <Image 
        source={require('../img/parmak_acma/01.png')} 
        style={{width: '95%', height: 510, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 02</Text>
        <Image 
        source={require('../img/parmak_acma/02.png')} 
        style={{width: '95%', height: 137, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 03</Text>
        <Image 
        source={require('../img/parmak_acma/03.png')} 
        style={{width: '95%', height: 128, resizeMode:'contain'}}/>
        <Text style={styles.paragraf}>
        Not: Bu etüdün çıkıcı bölümünde yer alan üçlü aralık atlamaların 
        seslendirilmesinde temiz baskı ve duyumun yanında ezgideki akıcılığa dikkat 
        edilmelidir. Ayrıca bu etüt icra ve çalışma öncesinde istenilen hızın 
        uygulanması ile her seviyede kullanılabilecek bir parmak açma etüdüdür.
        </Text>
        
        <Text style={styles.baslik1}>Etüt 04</Text>
        <Image 
        source={require('../img/parmak_acma/04.png')} 
        style={{width: '95%', height: 189, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 05</Text>
        <Image 
        source={require('../img/parmak_acma/05.png')} 
        style={{width: '95%', height: 194, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 06</Text>
        <Image 
        source={require('../img/parmak_acma/06.png')} 
        style={{width: '95%', height: 119, resizeMode:'contain'}}/>
       
        <Text style={styles.baslik1}>Etüt 07</Text>
        <Image 
        source={require('../img/parmak_acma/07.png')} 
        style={{width: '95%', height: 180, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 08 (a,b,c)</Text>
        <Image 
        source={require('../img/parmak_acma/08a.png')} 
        style={{width: '95%', height: 184, resizeMode:'contain'}}/>
        <Text style={styles.paragraf}>
        Not: Bu etütte onaltılık ve sekizlik notaların birim vuruş süresi içerisinde 
        seslendirilmesine (tartımlarına) dikkat edilmelidir.
        </Text>
        <Image 
        source={require('../img/parmak_acma/08b.png')} 
        style={{width: '95%', height: 237, resizeMode:'contain'}}/>
        <Image 
        source={require('../img/parmak_acma/08c.png')} 
        style={{width: '95%', height: 295, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 09 (a,b)</Text>
        <Image 
        source={require('../img/parmak_acma/09a.png')} 
        style={{width: '95%', height: 366, resizeMode:'contain'}}/>
        
        <Image 
        source={require('../img/parmak_acma/09b.png')} 
        style={{width: '95%', height: 541, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 10</Text>
        <Image 
        source={require('../img/parmak_acma/10.png')} 
        style={{width: '95%', height: 439, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 11</Text>
        <Image 
        source={require('../img/parmak_acma/11.png')} 
        style={{width: '95%', height: 390, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 12</Text>
        <Image 
        source={require('../img/parmak_acma/12.png')} 
        style={{width: '95%', height: 459, resizeMode:'contain'}}/>
        <Text style={styles.paragraf}>
        Not: Bu etütte ikinci tele geçişlerde seslerin temiz, alttan ve üstten 
        tezene vuruşlarında şiddetin eşit olmasına dikkat edilmelidir.
        </Text>

        <Text style={styles.baslik1}>Etüt 13</Text>
        <Image 
        source={require('../img/parmak_acma/13.png')} 
        style={{width: '95%', height: 250, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 14</Text>
        <Image 
        source={require('../img/parmak_acma/14.png')} 
        style={{width: '95%', height: 354, resizeMode:'contain'}}/>

        <Text style={styles.baslik1}>Etüt 15</Text>
        <Image 
        source={require('../img/parmak_acma/15.png')} 
        style={{width: '95%', height: 471, resizeMode:'contain'}}/>

        <Text style={styles.baslik1}>Etüt 16 (a,b)</Text>
        <Image 
        source={require('../img/parmak_acma/16a.png')} 
        style={{width: '95%', height: 433, resizeMode:'contain'}}/>
        <Image 
        source={require('../img/parmak_acma/16b1.png')} 
        style={{width: '95%', height: 494, resizeMode:'contain'}}/>
        <Image 
        source={require('../img/parmak_acma/16b2.png')} 
        style={{width: '95%', height: 122, resizeMode:'contain'}}/>
        <Text style={styles.paragraf}>
        Not: Bu etüdün 1 – 13. ölçüleri isteğe bağlı olarak tekrar edilerek çalınabilir.
        </Text>

        <Text style={styles.baslik1}>Etüt 17</Text>
        <Image 
        source={require('../img/parmak_acma/17.png')} 
        style={{width: '95%', height: 354, resizeMode:'contain'}}/>

        <Text style={styles.baslik1}>Etüt 18</Text>
        <Image 
        source={require('../img/parmak_acma/18_1.png')} 
        style={{width: '95%', height: 476, resizeMode:'contain'}}/>
        <Image 
        source={require('../img/parmak_acma/18_2.png')} 
        style={{width: '95%', height: 145, resizeMode:'contain'}}/>
        <Text style={styles.paragraf}>
        Not: 18. Etütte tartım üçerli olmasına rağmen vuruşlar baştan sona kadar üstten ve 
        alttan olmak üzere devam etmektedir. Burada, üçerli tartımlarda düz tezene vuruşu 
        uygulanarak temiz ve akıcı çalma becerisinin kazandırılması amaçlanmaktadır.
        Ayrıca 12. ve 20. ölçüde bulunan üç telin aynı anda seslendirildiği La karar sesli 
        vuruşta parmak numaralarının doğru oluşuna dikkat edilmelidir.
        </Text>

        <Text style={styles.baslik1}>Etüt 19</Text>
        <Image 
        source={require('../img/parmak_acma/19_1.png')} 
        style={{width: '95%', height:507, resizeMode:'contain'}}/>
        <Image 
        source={require('../img/parmak_acma/19_2.png')} 
        style={{width: '95%', height:237, resizeMode:'contain'}}/>
        <Text style={styles.paragraf}>
        Not: 19. Etüt Hicaz dizisinde üçerli tartımlarda düz tezene vuruşuna yöneliktir. 
        Bu etütte Hicaz dizisinde bulunan si bemol ve do diyez aralığına dikkat edilmelidir. 
        33. ölçüdeki baskı ise 1. tel si bemol perdesi üzerine kuruludur.
        </Text>
        
        <Text style={styles.baslik1}>Etüt 20</Text>
        <Image 
        source={require('../img/parmak_acma/20_1.png')} 
        style={{width: '95%', height:534, resizeMode:'contain'}}/>
        <Image 
        source={require('../img/parmak_acma/20_2.png')} 
        style={{width: '95%', height:287, resizeMode:'contain'}}/>
        <Text style={styles.paragraf}>
        Not: 30–33. ölçülerdeki kromatik aralıkları seslendirirken özellikle 1. parmağın geldiği 
        perdelere dikkat edilmesi daha seri çalma becerisini kazandıracaktır.
        </Text>

        <Text style={styles.baslik1}>Etüt 21</Text>
        <Image 
        source={require('../img/parmak_acma/21.png')} 
        style={{width: '95%', height:298, resizeMode:'contain'}}/>

        <Text style={styles.baslik1}>Etüt 22</Text>
        <Image 
        source={require('../img/parmak_acma/22.png')} 
        style={{width: '95%', height:411, resizeMode:'contain'}}/>

        <Text style={styles.baslik1}>Etüt 23</Text>
        <Image 
        source={require('../img/parmak_acma/23.png')} 
        style={{width: '95%', height:243, resizeMode:'contain'}}/>

        <Text style={styles.baslik1}>Etüt 24</Text>
        <Image 
        source={require('../img/parmak_acma/24.png')} 
        style={{width: '95%', height:296, resizeMode:'contain'}}/>
        <Text style={styles.paragraf}>
        Not: Bu etüt Zirgüleli Hicaz dizisinde parmak alıştırmaya yöneliktir. 
        Bu etüdün içerisinde özellikle mi perdesi üzerinde bulunan Hicaz aralığında, 
        parmakların mümkün olduğunca açık tutulması etüdün daha temiz ve akıcı çalınmasını sağlayacaktır.
        </Text>




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