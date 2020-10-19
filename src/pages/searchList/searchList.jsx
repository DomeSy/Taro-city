import React, { Component } from 'react'
import { View } from '@tarojs/components';
import { SearchView } from '@components'

import './searchList.scss'

class searchList extends Component {
  constructor(){
    super(...arguments)

    this.state = {
      value: '',
      list: [
        {
          text: '社会团体法人登记证书'
        },
        {
          text: '社会团体法人登记证书社会团体法人登记证书'
        }
      ]
    }
  }

  onChange = (value) => {
    this.setState({
      value
    })
  }

  render() {

    const { list } = this.state

    return (
      <View className="searchList">
        <SearchView placeholder="请输入搜索关键词" onChange={(value) => this.onChange(value) } />
        {
          list.map((item, index) => (
            <View className="searchList-list" key={index}>
              <View className="searchList-list-text"  >{item.text}</View>
            </View>
          ))
        }
      </View>
    )
  }
}

export default searchList
