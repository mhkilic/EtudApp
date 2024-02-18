import React from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import KapakScreen from './src/screens/KapakScreen';
import OnsozScreen from './src/screens/OnsozScreen';
import GirisScreen from './src/screens/GirisScreen';
import ParmakAcmaScreen from './src/screens/ParmakAcmaScreen';
import Icon from 'react-native-vector-icons/Ionicons';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerHeader}>
        <Text style={styles.drawerHeaderText}>100 Etüt</Text>
      </View>
      <DrawerItemList {...props}  />
      
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
    <NavigationContainer >
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen 
        name="Kapak" 
        component={KapakScreen}
        options={{
        drawerIcon: ()=>(<Icon
        name="reader"
        color="grey"
        size={24}
        />) 
        }}
        />
        

        <Drawer.Screen 
        name="Önsöz" 
        component={OnsozScreen} 
        options={{
        drawerIcon: ()=>(<Icon
        name="reader"
        color="grey"
        size={24}
        />) 
        }}  
        />

        <Drawer.Screen 
        name="Giriş" 
        component={GirisScreen} 
        options={{
        drawerIcon: ()=>(<Icon
        name="reader"
        color="grey"
        size={24}
        />) 
        }}  
        />
        <Drawer.Screen 
        name="Parmak Açma" 
        component={ParmakAcmaScreen} 
        options={{
        drawerIcon: ()=>(<Icon
        name="reader"
        color="grey"
        size={24}
        />) 
        }}  
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    backgroundColor: 'grey',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    borderRadius:10,
    marginBottom:10,
    marginHorizontal:8
  },
  drawerHeaderText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold'
  }
});