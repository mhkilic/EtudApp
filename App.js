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
import Icon from 'react-native-vector-icons/Ionicons';

function AnaDrawerContent(props) {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>100 Etüt</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Çıkış Yap"
        onPress={() => alert('Çıkış Yapıldı')}
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
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius: 10,
    marginBottom: 10,
    marginHorizontal: 8
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
