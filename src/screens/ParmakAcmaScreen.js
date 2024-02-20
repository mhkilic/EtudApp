import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import Etut01 from '../components/ParmakAcmaEtutleri/Etut01';
function ParmakAcmaScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Icon name="reader" color="black" size={24} style={styles.icon}/>
        
        <Etut01/>
        
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
        <Text style={styles.baslik1}>Etüt 25 (a,b)</Text>
        <Image 
        source={require('../img/parmak_acma/25a1.png')} 
        style={{width: '95%', height:501, resizeMode:'contain'}}/>
        <Image 
        source={require('../img/parmak_acma/25a2.png')} 
        style={{width: '95%', height:113, resizeMode:'contain'}}/>
        <Image 
        source={require('../img/parmak_acma/25b.png')} 
        style={{width: '95%', height:404, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 26</Text>
        <Image 
        source={require('../img/parmak_acma/26.png')} 
        style={{width: '95%', height:537, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 27</Text>
        <Image 
        source={require('../img/parmak_acma/27.png')} 
        style={{width: '95%', height:409, resizeMode:'contain'}}/>
        <Text style={styles.paragraf}>
        Not: Ölçü dönüşü işaretleri üzerinde bulunan 2 rakamı o ölçünün 
        iki defa tekrar edileceğini gösterir. Bu durumda o ölçü toplamda 
        üç defa çalınmış olur.
        </Text>
        
        <Text style={styles.baslik1}>Etüt 28</Text>
        <Image 
        source={require('../img/parmak_acma/28.png')} 
        style={{width: '95%', height:462, resizeMode:'contain'}}/>
      
        <Text style={styles.baslik1}>Etüt 29</Text>
        <Image 
        source={require('../img/parmak_acma/29_1.png')} 
        style={{width: '95%', height:526, resizeMode:'contain'}}/>
        <Image 
        source={require('../img/parmak_acma/29_2.png')} 
        style={{width: '95%', height:201, resizeMode:'contain'}}/>
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
        
        <Text style={styles.baslik1}>Etüt 30</Text>
        <Image 
        source={require('../img/parmak_acma/30.png')} 
        style={{width: '95%', height:453, resizeMode:'contain'}}/>

        <Text style={styles.baslik1}>Etüt 31</Text>
        <Image 
        source={require('../img/parmak_acma/31.png')} 
        style={{width: '95%', height:445, resizeMode:'contain'}}/>
      
        <Text style={styles.baslik1}>Etüt 32</Text>
        <Image 
        source={require('../img/parmak_acma/32_1.png')} 
        style={{width: '95%', height:445, resizeMode:'contain'}}/>
        <Image 
        source={require('../img/parmak_acma/32_2.png')} 
        style={{width: '95%', height:321, resizeMode:'contain'}}/>
        <Text style={styles.paragraf}>
        Not: Bu etüdün 11-15. ölçülerinde kesik bağ işareti ile belirtilen 
        sesler tutarak (parmakları kaldırmadan) çalınır.
        </Text>
        <Text style={styles.baslik1}>Etüt 33</Text>
        <Image 
        source={require('../img/parmak_acma/33.png')} 
        style={{width: '95%', height:357, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 34</Text>
        <Image 
        source={require('../img/parmak_acma/34_1.png')} 
        style={{width: '95%', height:530, resizeMode:'contain'}}/>
        <Image 
        source={require('../img/parmak_acma/34_2.png')} 
        style={{width: '95%', height:61, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 35</Text>
        <Image 
        source={require('../img/parmak_acma/35_1.png')} 
        style={{width: '95%', height:418, resizeMode:'contain'}}/>
        <Image 
        source={require('../img/parmak_acma/35_2.png')} 
        style={{width: '95%', height:435, resizeMode:'contain'}}/>

        <Text style={styles.baslik1}>Etüt 36</Text>
        <Image 
        source={require('../img/parmak_acma/36.png')} 
        style={{width: '95%', height:477, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 37</Text>
        <Image 
        source={require('../img/parmak_acma/37.png')} 
        style={{width: '95%', height:382, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik1}>Etüt 38</Text>
        <Image 
        source={require('../img/parmak_acma/38.png')} 
        style={{width: '95%', height:237, resizeMode:'contain'}}/>
        <Text style={styles.baslik1}>Etüt 39</Text>
        <Image 
        source={require('../img/parmak_acma/39.png')} 
        style={{width: '95%', height:470, resizeMode:'contain'}}/>
        <Text style={styles.paragraf}>
        Not: Bu etüdün 1-10. ölçüleri isteğe bağlı olarak tekrar edilerek çalınabilir.
        </Text>
        
        <Text style={styles.baslik1}>Etüt 40</Text>
        <Image 
        source={require('../img/parmak_acma/40.png')} 
        style={{width: '95%', height:558, resizeMode:'contain'}}/>
        
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