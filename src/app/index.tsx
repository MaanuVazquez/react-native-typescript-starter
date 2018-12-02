import {AppLoading, Asset, Font} from 'expo'
import React from 'react'
import {Platform, StatusBar, StyleSheet, View} from 'react-native'
import Navigator from '../components/Navigator'

interface Props {
  skipLoadingScreen?: boolean
}

interface State {
  isLoadingComplete: boolean
}

export default class App extends React.Component<Props, State> {
  public state = {
    isLoadingComplete: false
  }

  public _loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([require('../../assets/images/robot-dev.png'), require('../../assets/images/robot-prod.png')]),
      Font.loadAsync({
        'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf')
      })
    ])
  }

  public _handleLoadingError = (error: Error) => {
    console.warn(error)
  }

  public _handleFinishLoading = () => {
    this.setState({isLoadingComplete: true})
  }

  public render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      )
    } else {
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
          <Navigator />
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
})
