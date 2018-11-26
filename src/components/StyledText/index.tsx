import React from 'react'
import {Text} from 'react-native'

interface Props {
  style?: any
}

export default class StyledText extends React.Component<Props> {
  public render() {
    return <Text {...this.props} style={[this.props.style, {fontFamily: 'space-mono'}]} />
  }
}
