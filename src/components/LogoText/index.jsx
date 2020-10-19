import React from 'react';
import { View, Text } from '@tarojs/components';
import './index.scss'

// 搜索栏
function Index({titel = "爱山东", list = []}){
  return (
    <View className="LogoText">
      <View className="LogoText-title">
        你同意
        <Text className="LogoText-title-theme"> {titel} </Text>
        获取以下权限：
      </View>
      {
        list.map((item, index) => (
          <View className="LogoText-content" key={index}>
            <View className="LogoText-content-icon"></View>
            <View className="LogoText-content-text">{item.text}</View>
          </View>
        ))
      }
    </View>
  );
}

export default Index;
