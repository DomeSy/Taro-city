import React, { Component } from 'react'
import { View } from '@tarojs/components'
import { list } from './unilts/area.js'
import { AtIcon } from 'taro-ui'
import { connect } from 'react-redux'
import * as actions from '@actions/space'
import { getCurrentInstance } from '@tarojs/taro'
import { Jump } from '@unilts'
import './enclosure.scss'

@connect(({space}) => space, {...actions})
class Enclosure extends Component {
  constructor(){
    super(...arguments)

    this.state = {
      list,
      sign: getCurrentInstance().router.params.sign || false
    }
  }

  goBack = (item) => {
    const { sign } = this.state
    item = {
      ...item,
      sign
    }
    this.props.DSpaceSet(item)
    Jump({method: 'navigateBack'})
  }

  render() {
    const { list } = this.state

    return (
      <View className="Enclosure">
        {
          list.map((item, index) => (
            <View className="Enclosure-area" key={index} onClick={() => this.goBack(item)}>
              <View className="Enclosure-area-name">{item.area}</View>
              {
                item.effect ? <View className="Enclosure-area-effect">{item.effect}</View> :
                <AtIcon value='chevron-right' size='18' color='#CCCCCC'></AtIcon>
              }
            </View>
          ))
        }
      </View>
    )
  }
}

export default Enclosure
