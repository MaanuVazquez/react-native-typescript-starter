import {Ionicons} from '@expo/vector-icons'
import React from 'react'

import {COLORS} from '../../utils/constants'

interface Props {
  name: string
  focused: boolean
}

export default class TabBarIcon extends React.PureComponent<Props> {
  public render() {
    return (
      <Ionicons
        name={this.props.name}
        size={26}
        style={{marginBottom: -3}}
        color={this.props.focused ? COLORS.tabIconSelected : COLORS.tabIconDefault}
      />
    )
  }
}
