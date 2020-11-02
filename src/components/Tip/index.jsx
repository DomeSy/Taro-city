import React from 'react';
import { View } from '@tarojs/components';
import { Jump } from '@unilts'
import './index.scss'

// 搜索栏
function Index(){

  const goOpinion = () => {
    Jump({url: '/opinion'})
  }

  return (
    <View className="Tip">
        <View className="bottom">
          <View className="text1" onClick={() => goOpinion()}>联系我们</View>
          <View className="text2">服务更透明，办事一网通</View>
        </View>
      <View className="img"></View>
    </View>
  );
}

export default Index;
