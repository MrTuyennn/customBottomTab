import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from '../screens/HomeScreen';
import Browse from '../screens/BrowerScreen';
import Library from '../screens/LibraryScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import {BottomTabBar} from '@react-navigation/bottom-tabs';
import {BlurView} from '@react-native-community/blur';
const Tab = createBottomTabNavigator();

interface Props {}

const CustomTabBar = (props: Props) => {
  return (
    <BlurView
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      blurType="dark"
      blurAmount={10}
      blurRadius={25}
      overlayColor="transparent">
      // @ts-ignore
      <BottomTabBar {...props} />
    </BlurView>
  );
};

const TabNavigator = (props: Props) => {
  const screenOptions = (route: any, color: any) => {
    let iconName: any;

    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Browse':
        iconName = 'appstore-o';
        break;
      case 'Library':
        iconName = 'folder1';
        break;
      default:
        break;
    }

    return <Icon name={iconName} color={color} size={24} />;
  };
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => screenOptions(route, color),
      })}
      tabBar={props => <CustomTabBar {...props} />}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: '#d9d9d9',
        style: {
          borderTopColor: '#66666666',
          backgroundColor: 'transparent',
          elevation: 0,
        },
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
