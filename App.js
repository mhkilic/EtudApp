import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import KapakScreen from './src/screens/KapakScreen';
import OnsozScreen from './src/screens/OnsozScreen';
import GirisScreen from './src/screens/GirisScreen';
import Etut01 from './src/components/ParmakAcmaEtutleri/Etut01';
import Etut02 from './src/components/ParmakAcmaEtutleri/Etut02';
import Etut03 from './src/components/ParmakAcmaEtutleri/Etut03';
import Etut04 from './src/components/ParmakAcmaEtutleri/Etut04';
import Etut05 from './src/components/ParmakAcmaEtutleri/Etut05';
import Etut06 from './src/components/ParmakAcmaEtutleri/Etut06';
import Etut07 from './src/components/ParmakAcmaEtutleri/Etut07';
import Etut08 from './src/components/ParmakAcmaEtutleri/Etut08';
import Etut09 from './src/components/ParmakAcmaEtutleri/Etut09';
import Etut10 from './src/components/ParmakAcmaEtutleri/Etut10';
import Etut11 from './src/components/ParmakAcmaEtutleri/Etut11';
import Etut12 from './src/components/ParmakAcmaEtutleri/Etut12';
import Etut13 from './src/components/ParmakAcmaEtutleri/Etut13';
import Etut14 from './src/components/ParmakAcmaEtutleri/Etut14';
import Etut15 from './src/components/ParmakAcmaEtutleri/Etut15';
import Etut16 from './src/components/ParmakAcmaEtutleri/Etut16';
import Etut17 from './src/components/ParmakAcmaEtutleri/Etut17';
import Etut18 from './src/components/ParmakAcmaEtutleri/Etut18';
import Etut19 from './src/components/ParmakAcmaEtutleri/Etut19';
import Etut20 from './src/components/ParmakAcmaEtutleri/Etut20';
import Etut21 from './src/components/ParmakAcmaEtutleri/Etut21';
import Etut22 from './src/components/ParmakAcmaEtutleri/Etut22';
import Etut23 from './src/components/ParmakAcmaEtutleri/Etut23';
import Etut24 from './src/components/ParmakAcmaEtutleri/Etut24';
import Etut25 from './src/components/ParmakAcmaEtutleri/Etut25';
import Etut26 from './src/components/ParmakAcmaEtutleri/Etut26';
import Etut27 from './src/components/ParmakAcmaEtutleri/Etut27';
import Etut28 from './src/components/ParmakAcmaEtutleri/Etut28';
import Etut29 from './src/components/ParmakAcmaEtutleri/Etut29';
import Etut30 from './src/components/ParmakAcmaEtutleri/Etut30';
import Etut31 from './src/components/ParmakAcmaEtutleri/Etut31';
import Etut32 from './src/components/ParmakAcmaEtutleri/Etut32';
import Etut33 from './src/components/ParmakAcmaEtutleri/Etut33';
import Etut34 from './src/components/ParmakAcmaEtutleri/Etut34';
import Etut35 from './src/components/ParmakAcmaEtutleri/Etut35';
import Etut36 from './src/components/ParmakAcmaEtutleri/Etut36';
import Etut37 from './src/components/ParmakAcmaEtutleri/Etut37';
import Etut38 from './src/components/ParmakAcmaEtutleri/Etut38';
import Etut39 from './src/components/ParmakAcmaEtutleri/Etut39';
import Etut40 from './src/components/ParmakAcmaEtutleri/Etut40';
import Icon from 'react-native-vector-icons/Ionicons';

function AnaDrawerContent(props) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Bağlama için 100 Etüt</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Yrd. Doç. Dr. Mehmet KINIK"
        onPress={() => alert('Yazar')}
      />
    </DrawerContentScrollView>
  );
}
function ParmakAcmaDrawerContent(props) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Etütler (1 - 48)</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Çıkış Yap"
        onPress={() => alert('Çıkış Yapıldı')}
      />
    </DrawerContentScrollView>
  );
}
function ParmakCarpmaDrawerContent(props) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>Etütler (49 - 64)</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Çıkış Yap"
        onPress={() => alert('Çıkış Yapıldı')}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <AnaDrawerContent {...props} />}
        screenOptions={{
          drawerStyle: {
            borderRadius: 10,
            overflow: 'hidden'
          }
        }}>
        <Drawer.Screen
          name="Kapak"
          component={KapakScreen}
          options={{
            drawerIcon: () => (
              <Icon
                name="compass"
                color="grey"
                size={24}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Önsöz"
          component={OnsozScreen}
          options={{
            drawerIcon: () => (
              <Icon
                name="search-circle"
                color="grey"
                size={24}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Giriş"
          component={GirisScreen}
          options={{
            drawerIcon: () => (
              <Icon
                name="easel"
                color="grey"
                size={24}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Parmak Açma"
          component={ParmakAcmaAltMenu}
          options={{
            drawerIcon: () => (
              <Icon
                name="logo-youtube"
                color="grey"
                size={24}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Parmak Çarpma"
          component={ParmakCarpmaAltMenu}
          options={{
            drawerIcon: () => (
              <Icon
                name="logo-youtube"
                color="grey"
                size={24}
              />
            )
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const ParmakAcmaAltMenu = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <ParmakAcmaDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          borderRadius: 10,
          overflow: 'hidden'
        }
      }}>
      
      <Drawer.Screen
        name="Etüt 01"
        component={Etut01}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 02"
        component={Etut02}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 03"
        component={Etut03}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 04"
        component={Etut04}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 05"
        component={Etut05}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 06"
        component={Etut06}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 07"
        component={Etut07}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 08"
        component={Etut08}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 09"
        component={Etut09}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 10"
        component={Etut10}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 11"
        component={Etut11}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 12"
        component={Etut12}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 13"
        component={Etut13}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 14"
        component={Etut14}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 15"
        component={Etut15}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 16"
        component={Etut16}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 17"
        component={Etut17}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 18"
        component={Etut18}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 19"
        component={Etut19}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 20"
        component={Etut20}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 21"
        component={Etut21}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 22"
        component={Etut22}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 23"
        component={Etut23}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 24"
        component={Etut24}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 25"
        component={Etut25}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 26"
        component={Etut26}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 27"
        component={Etut27}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 28"
        component={Etut28}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 29"
        component={Etut29}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 30"
        component={Etut30}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 31"
        component={Etut31}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 32"
        component={Etut32}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 33"
        component={Etut33}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 34"
        component={Etut34}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 35"
        component={Etut35}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 36"
        component={Etut36}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 37"
        component={Etut37}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 38"
        component={Etut38}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 39"
        component={Etut39}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      <Drawer.Screen
        name="Etüt 40"
        component={Etut40}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
    </Drawer.Navigator>
  );
};
const ParmakCarpmaAltMenu = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <ParmakCarpmaDrawerContent {...props} />}
      screenOptions={{
        drawerStyle: {
          borderRadius: 10,
          overflow: 'hidden'
        }
      }}>
      
      <Drawer.Screen
        name="Etüt 01"
        component={Etut01}
        options={{
          drawerIcon: () => (
            <Icon
              name="logo-youtube"
              color="grey"
              size={24}
            />
          )
        }}
      />
      
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: 'grey',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 8,
    marginBottom: 5,
    marginHorizontal: 2
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
