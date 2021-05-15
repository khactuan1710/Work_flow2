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
  Dimensions,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native';

import 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/Ionicons';

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



const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow
    }}
    onPress={onPress}
  >
    <View style={{
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: '#1BADFF'
    }}>
      {children}
    </View>
  </TouchableOpacity>
)

function Home() {
  return (

    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#1BADFF',
        labelStyle: {
          fontSize: 12
        },
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow
        }
      }}
    >

      <Tab.Screen options={{
        tabBarIcon: ({ focused, color, size }) => (
          <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
            <Image source={require('./src/screens/iconHome/iconhome.png')}
              resizeMode='contain'
              style={{
                width: 30, height: 30,
                tintColor: focused ? '#1BADFF' : '#c4c4c4'
              }}
            />
            <Text
              style={{ color: focused ? '#1BADFF' : '#c4c4c4', fontSize: 15 }}
            >
              Trang chủ
            </Text>
          </View>
        )
        // {
        //   if (focused) {
        //     return (
        //       <Image source={require('./src/screens/iconHome/home.png')} resizeMode='contain' style={[styles.icon, { tintColor: '#1BADFF' }]} />
        //     )
        //   } else {
        //     return (
        //       <Image source={require('./src/screens/iconHome/home.png')} resizeMode='contain' style={[styles.icon]} />
        //     )
        //   }
        // },




      }}
        tabBa
        name="home" component={home} />


      {/* <Tab.Screen name="AddWork" component={Type_work} options={{
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
      /> */}
      <Tab.Screen name='AddWork' component={Type_work}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('./src/screens/iconHome/iconthemcongviec.png')}
              resizeMode='contain'
              style={{
                width: 30,
                height: 30,
                tintColor: '#fff'
              }}
            />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props} />
          )
        }}
      >

      </Tab.Screen>

      <Tab.Screen name='Notify' component={Notify}
        // options={{
        //   tabBarIcon: ({ focused }) => {
        //     if (focused) {
        //       return (
        //         <Image source={require('./src/screens/iconHome/bell.png')} resizeMode='contain' style={[styles.icon, { tintColor: '#1BADFF' }]}></Image>
        //       )
        //     } else {
        //       return (
        //         <Image source={require('./src/screens/iconHome/bell.png')} resizeMode='contain' style={[styles.icon]}></Image>
        //       )
        //     }
        //   },
        //   tabBarLabel: 'Thông báo'
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={{ alignItems: 'center', justifyContent: 'center', top: 10 }}>
              <Image source={require('./src/screens/iconHome/iconthongbao.png')}
                resizeMode='contain'
                style={{
                  width: 30, height: 30,
                  tintColor: focused ? '#1BADFF' : '#c4c4c4'
                }}
              />
              <Text
                style={{ color: focused ? '#1BADFF' : '#c4c4c4', fontSize: 15 }}
              >
                Thông báo
              </Text>
            </View>
          )
        }}
      />
    </Tab.Navigator>
  );
}



function MyDrawer() {
  return (
    <Drawer.Navigator
      initialRouteName={Home} drawerPosition='left'
      // drawerStyle={{
      //   width: width * (2 / 3),
      // }}

      drawerContentOptions={{
        activeTintColor: 'red',
      }}


      drawerContent={props =>
        <Drawer1 {...props} />}

    >
      <Drawer.Screen name='MyStack' component={Home} ></Drawer.Screen>
    </Drawer.Navigator>
  )
}

var { height, width } = Dimensions.get('window')

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name='login' component={Login}></Stack.Screen>
          <Stack.Screen name='Home' component={MyDrawer}></Stack.Screen>
          <Stack.Screen name='Type_work' component={Type_work}></Stack.Screen>
          <Stack.Screen name='Create_work' component={Create_work}></Stack.Screen>
          <Stack.Screen name='Create_successfully' component={Creact_successfully}></Stack.Screen>
        </Stack.Navigator>
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
  },
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
})