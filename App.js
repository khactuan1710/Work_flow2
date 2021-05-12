/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Switch,
  Button,
  Dimensions
} from 'react-native';

import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons'


import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  createDrawerNavigator,
  DrawerContent,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer'



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

import home from './src/screens/Home'
import Login from './src/screens/Login'
import Type_work from './src/screens/type_work'
import Create_work from './src/screens/creact_work'
import Creact_successfully from './src/screens/create_successfully';
import Notify from './src/screens/notyfi';

import Drawer1 from './DrawerContent'

import { color } from 'react-native-reanimated';



function Home() {
  return (

    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#1BADFF',
        labelStyle: {
          fontSize: 12
        }
      }}
    >

      <Tab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => {
          if (focused) {
            return (
              <Image source={require('./src/screens/iconHome/home.png')} resizeMode='contain' style={[styles.icon, { tintColor: '#1BADFF' }]} />
            )
          } else {
            return (
              <Image source={require('./src/screens/iconHome/home.png')} resizeMode='contain' style={[styles.icon]} />
            )
          }
        },

        tabBarLabel: 'Trang chủ'


      }}
        tabBa
        name="home" component={home} />


      <Tab.Screen name="AddWork" component={Type_work} options={{
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return (
              <Image source={require('./src/screens/iconHome/add.png')} resizeMode='contain' style={{ height: 40, width: 40, tintColor: '#1BADFF' }}></Image>
            )
          } else {
            return (
              <Image source={require('./src/screens/iconHome/add.png')} resizeMode='contain' style={{ height: 40, width: 40 }}></Image>
            )
          }
        },
        tabBarLabel: 'Tạo việc'
      }}
      />

      <Tab.Screen name='Notify' component={Notify}
        options={{
          tabBarIcon: ({ focused }) => {
            if (focused) {
              return (
                <Image source={require('./src/screens/iconHome/bell.png')} resizeMode='contain' style={[styles.icon, { tintColor: '#1BADFF' }]}></Image>
              )
            } else {
              return (
                <Image source={require('./src/screens/iconHome/bell.png')} resizeMode='contain' style={[styles.icon]}></Image>
              )
            }
          },
          tabBarLabel: 'Thông báo'
        }}
      />
    </Tab.Navigator>
  );
}


function MyStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name='login' component={Login}></Stack.Screen>
      <Stack.Screen name='Home' component={Home}></Stack.Screen>
      <Stack.Screen name='Type_work' component={Type_work}></Stack.Screen>
      <Stack.Screen name='Create_work' component={Create_work}></Stack.Screen>
      <Stack.Screen name='Create_successfully' component={Creact_successfully}></Stack.Screen>
    </Stack.Navigator>
  )
}

var { height, width } = Dimensions.get('window')

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName={Home} drawerPosition='left'
          drawerStyle={{ width: width * (2 / 3) }}
          drawerContent={props =>
            <Drawer1 {...props} />}
        >
          <Drawer.Screen name='MyStack' component={MyStack} ></Drawer.Screen>
          <Drawer.Screen name='drawer' component={Drawer1} ></Drawer.Screen>
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}
export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  tabBar: {
    alignItems: 'center'
  },
  icon: {
    alignItems: 'center',
    height: 30,
    width: 30
  }
})