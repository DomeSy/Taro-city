import React,{ useState } from 'react'
import { AtFloatLayout } from "taro-ui"
import { View } from '@tarojs/components'
import { AtIcon } from 'taro-ui'
import { site } from '@unilts/site';

import './index.scss'

function Index(){

  const [area, setArea] = useState(site);
  const [title, setTitle] = useState("济南市");
  const [open, setOpen] = useState(false);

  const onArea = (item, area, setArea, setOpen, setTitle) => {
    if (!item.active) {
      const arr = area.map(items => {
        items.active = items.area == item.area ? true : false;
        return items
      })
      setArea(arr);
      setTitle(item.area)
      setOpen(false);
    } else {
      setOpen(false)
    }
  }

  const onChangeArea = (open, setOpen) => {
    setOpen(!open)
  }

  return (
    <>
      <AtFloatLayout isOpened={open} title="选择城市">
        <View className="DSite-site">
          {
            area.map((item, index) => (
              <View 
                className={item.active ? "DSite-site-area DSite-site-active" :  "DSite-site-area"}
                key={index}
                onClick={() => onArea(item, area, setArea, setOpen, setTitle)}
              >
              {item.area}
              </View>
            ))
          }
        </View>
      </AtFloatLayout>
      <View className="DSite"  onClick={() => onChangeArea(open, setOpen)}>
        <View className="DSite-text">
          {title}
        </View>
      <AtIcon value='chevron-down' size='24' color='rgba(123,123,123,1)'></AtIcon>
    </View>
    </>

  )
}

export default Index;
