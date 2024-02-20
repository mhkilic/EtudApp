import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import KapakScreen from './src/screens/KapakScreen';
import OnsozScreen from './src/screens/OnsozScreen';
import GirisScreen from './src/screens/GirisScreen';
import ParmakAcmaScreen from './src/screens/ParmakAcmaScreen';
import Etut01 from './src/components/ParmakAcmaEtutleri/Etut01';
import Icon from 'react-native-vector-icons/Ionicons';

function CustomDrawerContent(props) {
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

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={props => <CustomDrawerContent {...props} />}
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
                name="reader"
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
                name="reader"
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
                name="reader"
                color="grey"
                size={24}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Parmak Açma"
          component={EtutStack}
          options={{
            drawerIcon: () => (
              <Icon
                name="reader"
                color="grey"
                size={24}
              />
            )
          }}
        />
        <Drawer.Screen
          name="Parmak Çarpma"
          component={EtutStack}
          options={{
            drawerIcon: () => (
              <Icon
                name="reader"
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

const EtutStack = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
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
              name="reader"
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
