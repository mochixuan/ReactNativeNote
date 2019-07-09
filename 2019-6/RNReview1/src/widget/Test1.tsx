import React, { Component, PureComponent, useEffect, useState } from 'react'
import { Animated, ErrorUtils , Text , TouchableOpacity , View } from 'react-native'

interface IPops {
  data: string
}

const HookView = () => {
  const [person, setPerson] = useState({ name: 'mochixuan', age: 20 })
  
  const onPress = () => {
    setPerson({ age: person.age + 1 , name: person.name })
  }

  useEffect(() => {
    // console.warn('刷新完成' + person.age)
  })
  
  return (
    <View>
      <TouchableOpacity 
        onPress={onPress} 
        style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0ffff', padding: 20 }}
      >
        <Text>{person.name + ': ' + person.age}</Text>
      </TouchableOpacity>
    </View>
  )
}

class Test1 extends Component<IPops> {
  public render () {
    // console.warn('refresh')
    return (
      <View>
        <Text>{this.props.data}</Text>
        <HookView/>
      </View>
    )
  }

}

export { Test1 }
