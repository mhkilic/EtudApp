import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

function GirisScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Icon name="reader" color="black" size={24} style={styles.icon}/>
        <Text style={styles.baslik1}>{'      '}Bağlama Eğitiminde {'\n'}Etüt İhtiyacı ve Çalgı Müziği</Text>
        <Text style={styles.paragraf}>
        {'    '}Geleneksel müzik kültürümüzün en önemli çalgılarından biri olan bağlama, uzun zaman diğer 
        geleneksel çalgılarımız gibi türkülere eşlik sazı gibi görülmüş ve kullanılmıştır. Ancak geleneksel 
        çalgılarımızın enstrüman kimliği ile ön plana çıktığı son yıllarda bu anlayışa paralel olarak hızla 
        kimliğini geliştirme yönünde adımlar atmıştır. Ülkemizde çalgı müziğine yönelik yenilikçi çalışmaların 
        henüz yeterli sayıya ulaşmaması, alandaki eksikliklerin giderilmesi yönündeki çalışmalara zemin hazırlamaktadır. 
        Bağlamanın teknik imkânlarının, ses sahasının ve tını özelliklerinin müzikal kimliğinin sonuna kadar 
        değerlendirileceği etütler ve ezgilerin üretilmesi kültürel kimliğimizin önemli bir dalı olan müzik 
        kültürümüzün gelişimine katkı sağlayacaktır. Bu da, bağlamada nitelikli bir eğitiminin yapılabilmesinde 
        uygulanan yöntemin yanında repertuar ya da materyalin önemini ortaya çıkarmaktadır. Ülkemizde bu güne 
        kadar süregelen bağlama eğitimi ağırlıklı olarak çoğu türkülerden oluşturulmuş çeşitli bağlama metotları 
        eşliğinde ya da yöresel tavırların merkeze alındığı geleneksel Türk halk müziği repertuarı kullanılarak 
        yapılan öğretim şeklidir. Türkülerin büyük bir bölümü geleneği aktarmada doğru kaynaklar olmakla birlikte 
        bağlamanın teknik imkânlarını zorlayacak ve icrayı geliştirecek özelliklere sahip değildirler. Bu da mevcut 
        bağlama eğitiminin niteliğini artırma amaçlı yapılan çalışmaların gerekliliğini ve önemini gözler önüne 
        sermektedir. Bu manada etütlerin de önemi ortaya çıkmaktadır. Mevcut bağlama metotları içerisinde sınırlı 
        ölçüde ve içerikte etütlere yer verilmektedir. Üniversitelerde kullanılan etütsel kaynaklar ise çoğu zaman 
        öğretim elemanları ya da öğreticilerin kişisel çalışmalardan oluşan ders notları şeklindedir. Bunun yanında 
        piyasada ulaşılabilecek nitelikte basılı ve yayınlanmış etüt içerikli kaynaklar olmakla birlikte bu kaynaklar 
        sayıca yetersizdirler.
        </Text>
        <Text style={styles.paragraf}>
        {'    '}Çalgı tekniğinin geliştirmede önemli katkılar sağlayan ve icrada ileri düzeylere gelebilmede de önemli 
        paya sahip olan etütlerden en ileri seviyede yararlanılabilmesi için söz konusu çalgıya doğrudan yarar sağlayan 
        ve çalgıyı iyi tanıyan tecrübeli kişiler tarafından bilinçli olarak hazırlanan etütlere duyulan ihtiyaç giderek 
        daha da artmaktadır. Dolayısıyla bu tür çalışmaların ilgili kişilerin uğraşları doğrultusunda hız kazanması gerekmektedir.
        </Text>
        <Text style={styles.paragraf}>
        {'    '}Bağlama, fiziksel yapısı, çalım tekniği ve ses kapasitesi açısından virtüöziteye imkân tanıyan bir çalgıdır. 
        Bu yüzden bağlama için hem geleneksel ezgi yapılarını hem de diğer müzik türlerine yönelik yapıları yansıtan hemen 
        her ton, makam ve usulde, farklı seviyelere yönelik virtüözlük becerisinin sergilenmesine imkân tanıyan örnekler 
        geliştirilmeli ve bunların devamlılığının sağlanması gerekmektedir. Geleneksel çalgı eğitimimizde etütlerin yeterli 
        sayıda ve içerikte olmamasından dolayı bazı icrâcı ve öğreticilerin farklı çalgılardan adapte edilmiş eser ya da etütleri 
        kullandıkları görülmektedir. Bu tür örnekler farklı aralıkları içeren pasajların icrasını geliştirme yönünde yarar 
        sağlayabileceği gibi bu örnekler farklı bir çalgıya ait çalım tekniğini içermesinden dolayı o çalgı için gereksiz 
        çalışmalar olabilmekte, hatta zaman kaybına da neden olabilmektedir.
        </Text>
        <Text style={styles.paragraf}>
        {'    '}“Bağlama için 100 etüt” adlı çalışma her şeyden önce bir öğretim metodu değil, çalma becerisine katkı sağlayacak, 
        parmak ve bilek uygulamalarını geliştirecek bir etüt kitabıdır. Bu etütler geleneksel türkülere bir alternatif olarak 
        görülmemelidir. Etütlerin temel amacı temiz entonasyon ve akıcı bir şekilde ileri düzey çalma becerisini kazandırmaktır. 
        Bu yüzden türküler içerisinde yer alan bazı ritim kalıpları ve tartımlar etütler içerisinde yer almamaktadır. Bu tür tartım 
        ve ritim kalıplarını en iyi şekilde öğretecek kaynaklar yine geleneksel türkülerdir. Bağlama için yüz etüt adlı çalışmada 
        yer alan etütler on yıllık bir sürede oluşturulmuştur. Daha sonra dört yıl Erciyes Üniversitesi Güzel Sanatlar Fakültesi 
        müzik bölümündeki bağlama öğrencileri ile çalışılarak bu dört yıllık deneme/uygulama sürecinde bazı etütler elenerek bağlama 
        öğretimine doğrudan katkı sağlayanlara çalışmada yer verilmiştir. Etütlerin yararlılığının tespitinde ise öğrencilerin etütleri 
        çalışma esnasında gözlemlenerek kendileri ile görüşmeler yapılması etkili olmuştur. Bu gözlem ve görüşmelerde etütlerin 
        yararlılığına inanıp inanmadıkları, kendilerine ne düzeyde yarar sağladığı, bağlama eğitiminde bu etütlerin süreci nasıl 
        etkilediği gibi hususlarda öğrencilerin görüşleri alınmış, bu görüşler kendi değerlendirmelerimizle birleştirilerek gerekli 
        düzeltmeler yapılmıştır. Ayrıca çalışmalar esnasında öğrencilerle yapılan görüşmeler ve alınan dönütlerle öğrencinin doğrudan 
        katılımı sağlanmış olup bu etütlerin yararlılığı konusunda öğrencilerin samimi ve gerçek görüşleri ortaya çıkmıştır. Tüm bu 
        çalışmalar sonrasında “Bağlama İçin 100 Etüt” adını verdiğimiz bu kitap oluşturulmuştur.
        </Text>
        <Text style={styles.paragraf}>
        {'    '}Kitapta yer alan etütlerde ilerleme mantığında öncelik bağlamanın 1. (alt) teline hâkimiyeti sağlamaya yöneliktir. 
        Daha sonra ilerleyen etütlerde ise sırasıyla 2. tel ve 3. tel devreye girmektedir. Yöresel tezene tavırlarının öğreniminde 
        Türk halk müziği repertuarında bulunan türküler doğru ve etkili kaynak oldukları düşünüldüğünden dolayı kitapta yöresel 
        tezene öğretimine yönelik örneklere yer verilmemiştir. Etütlerin birçoğunda hazır bulunuşluk durumu ve çalan kişinin seviyesi 
        değişebileceği için hız belirtilmemiştir. Bazılarında ise ezginin akıcılığının ve icrasal yönden ifade ettiği anlamın 
        sergilenebilmesi için hız terimi belirtilmiştir. Bu etütlerin bir kısmı çalışma öncesi ısınma ya da parmak açma amacına 
        yönelik olarak hazırlanmıştır. Bir kısmı ise parmak çarpmalarını geliştirme amacına yöneliktir. Kitapta yer alan etütlerin 
        bir kısmı ise ağırlıklı olarak sağ bilek (tezene tutan bileğin) ve tezene çalışmasına yöneliktir. Bazı etütlerde kromatik 
        olarak ta adlandırılan küçük ikili aralıklar ile 1, 2, 3, ve 4. parmakların ard arda akıcı bir şekilde kullanılması 
        amaçlanmıştır Kitabın son bölümünde “İleri Düzey Performans Etütleri” başlığı altında verilen etütler ise daha önceki 
        etütlerde kazandırılması hedeflenen özellikleri kapsamakta olup bağlamanın teknik imkânlarının, ses sahasının, tını 
        özelliklerinin ve müzikal kimliğinin değerlendirileceği bir içeriğe sahip olması amanca yönelik olarak hazırlanmışlardır. 
        Bu etütler aynı zamanda bağlama ile zevkle çalınabilecek, çalgı müziği nitelikli repertuar olma özelliğine de sahiptirler 
        ve virtüöz olma yolunda önemli yol kat edilmesini sağlayacaklardır.
        </Text>
        <Text style={styles.paragraf}>
        {'    '}Kitapta yer alan etütlerin hiç biri farklı kaynaklardan ya da farklı çalgılara ait örneklerden adaptasyon yolu 
        ile elde edilmemişlerdir. Bu etütlerin tamamı sadece bağlamanın teknik imkânlarının ortaya çıkarılması ve kullanımına 
        yönelik yeni ve özgün örnekler kapsamında olup ilk defa bu kitapta yer almışlardır.
        </Text>

        <Text style={styles.baslik1}>{'           '}Etütlerde Kullanılan {'\n'}Terimler, İşaretler ve Anlamları</Text>
        
        <View>
          <Text style={styles.maddeList}>{'    '}1  İşaret Parmağı </Text>
          <Text style={styles.maddeList}>{'    '}2  Orta Parmak </Text>
          <Text style={styles.maddeList}>{'    '}3  Yüzük Parmağı </Text>
          <Text style={styles.maddeList}>{'    '}4  Serçe Parmak </Text>
          <Text style={styles.maddeList}>{'    '}+  Baş Parmağı sembolize eder. Aynı zamanda + işaretinin görüldüğü yerlerde 3. tel kullanılır. </Text>
        </View>
        
        <Text style={styles.paragraf}>
        {'    '}0: Boş Tel. Yukarıda gösterildiği gibi daire içerisinde numarası verilen telin boş haldeki sesini belirtir. 
        1. telin boş şekli sol anahtarındaki 2. aralık La perdesi, 2. telin boş şekli sol anahtarı 1. çizginin bir alt perdesi 
        olan Re perdesi ve 3. telin boş sesi ise sol anahtarı 2. çizgi Sol perdesidir.
        </Text>
        <Text style={styles.paragraf}>
        {'         '}(1) (2) (3) :Tel Numaraları. {'\n'}1. (Alt) Tel, 2. (Orta) Tel, 3. (Üst) Tel.
        </Text>
        
        <View>
          <Text style={styles.maddeList}>{'    '}Üstten Tezene Vuruşu </Text>
          <Text style={styles.maddeList}>{'    '}Alttan Tezene Vuruşu  </Text>
          <Text style={styles.maddeList}>{'    '}Arpej: Notaların üzerinde kesik bağ işareti olarak gösterilen bu işaret, uzayan 
          bağlı seslerin parmakları kaldırmadan çalınacağını gösterir.  </Text>
          </View>

        <Text style={styles.paragraf}>
        {'    '}Yukarda verilen terim ve işaretlerin dışındakiler çeşitli kaynaklardan genel müzik bilgisi kapsamında edinilmelidir.
        </Text>
        
        <Text style={styles.baslik1}>Uyarılar</Text>
        
        <Text style={styles.paragraf}>
        {'    '}“Bağlama için 100 etüt” adlı kitapta bulunan etütlerin icrası için öncelikle temel düzey teorik müzik bilgisine 
        sahip olmak gerekmektedir. Bu yüzden “Bağlama İçin 100 Etüt” kitabı yeni başlayanlar için uygun olmayıp temel müzik bilgisine 
        sahip olduktan sonra çalışılması tavsiye edilir.
        </Text>
        <Text style={styles.paragraf}>
        {'    '}Etütlerin başında verilip daha sonra belirtilmeyen tezene yönleri, bazı bölümlerde ayrıca belirtilmediği sürece başta 
        verilen tezene şekli geçerlidir. Etütlerin büyük bir bölümünde üstten alttan şeklinde devam eden tezene vuruş şekli hâkimdir. 
        Çoğu zaman bu vuruş şekli tel değiştirme sırasında da geçerli olup akıcı ve acelitel çalmada önemli bir role sahiptir.
        </Text>
        <Text style={styles.paragraf}>
        {'    '}Sol anahtarında bulunan birinci çizgi mi perdesi, bunun altında bulunan re perdesi ve üstündeki fa perdeleri her 
        durumda bağlamanın orta teline geçildiğini gösterir.
        </Text>
        <Text style={styles.paragraf}>
        {'    '}Etütlerin tamamında parmak numaraları verilmemiştir. Bu durumda numaralandırılmamış pozisyonlarda daha önceden 
        verilen parmak numaraları/pozisyonlarındaki mantık uygulanmalıdır.
        </Text>
        <Text style={styles.paragraf}>
        {'    '}Bazı etütlerde sadece 4. parmağın belirtildiği bölümlerde önceki ses ile oluşan aralık küçük ikili ise 4. parmaktan 
        önceki perdeye 3. parmak ile basılmalı, eğer bu aralık büyük ikili ise önceki perdeye 2. parmak ile basılmalıdır. Örneğin peş 
        peşe gelen mi- fa-sol seslerinin yer aldığı bölümlerde parmak numarası sırasıyla 1, 2, 4 şeklindedir. Sol-la-si bemol seslerinin 
        yer aldığı bölümlerde parmak numarası sırasıyla 1, 3, 4 şeklinde olmalıdır.
        </Text>
        <Text style={styles.paragraf}>
        {'    '}Etütler teknik yönden performans geliĢtirmeye yönelik öğretim materyalleri olduğu için icra hızları çalan kiĢinin hazır 
        bulunuĢluk düzeyine göre değiĢebilmektedir. Ancak etütlerin icrasındaki ana hedef; sadece hızlı çalma değil, belirtilen müzikal 
        ifade ve iĢaretlerin doğru biçimde uygulandığı, temiz ve müzikal bir Ģekilde çalarak hızlanma olmalıdır.
        </Text>

        <Text style={styles.baslik1}>{'     '}Bağlamadaki Perdelerin{'\n'} Dizek Üzerinde Gösterilmesi</Text>
        
        <Text style={styles.baslik2}>{'     '}3. Tel üzerinde bulunan ana perdelerin dizek üzerinde gösterilmesi</Text>

        <Image 
        source={require('../img/tel3_1_perde_dizek.png')} 
        style={{width: '95%', height: 250, resizeMode:'contain'}}/>

        <Text style={styles.baslik2}>{'     '}1. Tel üzerinde bulunan ana perdelerin dizek üzerinde gösterilmesi</Text>

        <Image 
        source={require('../img/tel2_perde_dizek.png')} 
        style={{width: '95%', height: 250, resizeMode:'contain'}}/>
        
        <Text style={styles.baslik2}>{'     '}2. Tel üzerinde bulunan ana perdelerin dizek üzerinde gösterilmesi</Text>
        

        
        
        
        
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
      marginTop:20,
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

export default GirisScreen;