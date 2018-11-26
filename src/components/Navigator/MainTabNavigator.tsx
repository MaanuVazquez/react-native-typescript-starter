import React from 'react'
import {Platform} from 'react-native'
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'

import HomeScreen from '../../layouts/HomeScreen'
import LinksScreen from '../../layouts/LinksScreen'
import SettingsScreen from '../../layouts/SettingsScreen'
import TabBarIcon from '../TabBarIcon'

interface TabBarIconProps {
  focused: boolean
}

const HomeStack = createStackNavigator({
  Home: HomeScreen
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}: TabBarIconProps) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}
    />
  )
}

const LinksStack = createStackNavigator({
  Links: LinksScreen
})

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({focused}: TabBarIconProps) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  )
}

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
})

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({focused}: TabBarIconProps) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  )
}

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack
})
