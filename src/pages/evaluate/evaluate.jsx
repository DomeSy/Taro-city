import React, { Component } from 'react'
import { View } from '@tarojs/components';
import { AtRate } from 'taro-ui'
import './evaluate.scss'
import { ListShow, Textarea, Button } from '@components';

class Card extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      list: [
        {
          name: '事项名称：',
          text: '补办身份证补办身份证补办身份证补办身份证 补办身份证'
        },
        {
          name: '事项名称：',
          text: '补办身份证补办身份证补办身份证补办身份证 补办身份证'
        }
      ],
      grade: 0,
      textValue: ''
    }
  }

  Gread = (grade) => {
    this.setState({
      grade
    })
  }

  onChangeText = (textValue) => {
    this.setState({
      textValue
    })
  }

  render() {

    const { list, grade } = this.state;

    return (
      <View className="Evaluate">
        <ListShow list={list} />
        <View className="Evaluate-grade">
          <View className="Evaluate-grade-text">我的评分：</View>
          <AtRate
            size="15"
            value={grade}
            onChange={this.Gread}
          />
        </View>
        <Textarea title="我的评价：" maxLength="100" placeholder="请输入评论内容：限100字以内" onChange={this.onChangeText}/>
        <View className="Evaluate-grade-border"></View>
        <Button />
        <View className="Evaluate-grade-tip">请于2020-08-30 23：32前提交评价，逾期无法再进行评价。</View>
      </View>
    )
  }
}

export default Card
