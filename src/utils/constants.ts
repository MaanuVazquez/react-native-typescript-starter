import {Dimensions} from 'react-native'

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const tintColor = '#2f95dc'

export const COLORS = {
  tintColor,
  tabIconDefault: '#ccc',
  tabIconSelected: tintColor,
  tabBar: '#fefefe',
  errorBackground: 'red',
  errorText: '#fff',
  warningBackground: '#EAEB5E',
  warningText: '#666804',
  noticeBackground: tintColor,
  noticeText: '#fff'
}

export const DIMENSIONS = {
  window: {
    width,
    height
  },
  isSmallDevice: width < 375
}
