import React, { Component } from 'react'
import {
  FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View
} from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { ELoadingState } from '../../impl/ICommon'
import { INewsModel } from '../../impl/IHomeCommon'
import { IStateTree } from '../../impl/IStateTree'
import { changeUserInfoAction } from '../../redux/action/userAction'
import { iPhoneXBaseHeaderView, renderSeparatorView, separatorHeight } from '../../styles/baseView'
import { ufontSize, uwidth } from '../../utils/UiUtils'
import { showToast } from '../../utils/Util'
import { Test1 } from '../../widget/Test1'
import { Test2 } from '../../widget/Test2'

interface IProps {
  navigation: NavigationScreenProp<any, any>,
  changeUserInfo: (name: string, password: string) => void,
  name?: string,
  password?: string
}

interface IState {
  newsItems: INewsModel[],
  loadingState: ELoadingState
}

const itemHeight = uwidth(100)

const imgItems = [
  'http://n.sinaimg.cn/photo/700/w1000h500/20190610/fc28-hyeztys2410911.jpg',
  'http://n.sinaimg.cn/news/700/w1000h500/20190529/68a7-hxsrwwq7568428.jpg',
  'http://n.sinaimg.cn/photo/transform/700/w1000h500/20190603/0e45-hxvzhth0481325.jpg',
  'http://n.sinaimg.cn/photo/700/w1000h500/20190605/9467-hxyuaph4976302.jpg',
  'http://n.sinaimg.cn/photo/700/w1000h500/20190606/a150-hxyuaph9286356.jpg'
]

let name = 'mochixuan'
class Page extends Component<IProps, IState> {

  constructor (props: any) {
    super(props)
    this.state = {
      newsItems: [],
      loadingState: ELoadingState.Loading
    }
  }

  public componentDidMount () {
    this.requestData()
  }

  public render () {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {iPhoneXBaseHeaderView}
        <TouchableOpacity style={styles.btn} onPress={this.changeUserInfo}>
          <Text style={{ color: '#f00' }}>{this.props.name + ' ' + this.props.password}</Text>
        </TouchableOpacity>
        <Test1 data={'mochixuan'}/>
        <Test2 data={name}/>
        <FlatList
          data={this.state.newsItems}
          keyExtractor={this.keyExtractor}
          renderItem={this._renderItemView}
          getItemLayout={this.getItemLayout}
          showsVerticalScrollIndicator={true}
          ItemSeparatorComponent={renderSeparatorView}
        />
      </SafeAreaView>
    )
  }

  private changeUserInfo = () => {
    this.props.changeUserInfo('mochixuan', '123456')
  }

  private keyExtractor = (item: INewsModel, index: number) => item.title + index
  private getItemLayout = (item: any, index: number) => ({ length: itemHeight, offset: (itemHeight + separatorHeight) * index, index })

  private _renderItemView = (data: {item: INewsModel, index: number}) => {
    return (
      <View style={styles.item}>
        <View style={styles.item_top}>
          <Image source={{ uri: data.item.img }} style={styles.item_top_icon}/>
          <Text style={styles.item_top_title}>{data.item.title}</Text>
          <Text style={styles.item_top_desc}>{data.item.desc}</Text>
        </View>
        <Text style={styles.item_date}>{data.item.date}</Text>
      </View>
    )
  }

  private requestData = () => {

    this.setState({ loadingState: ELoadingState.Loading })
    setTimeout(() => {
      let newData: INewsModel[] = []
      for (let i = 0 ; i < 100 ; i++) {
        newData.push({
          title: 'mochixuan' + i,
          desc: 'hello world',
          date: new Date().getTime(),
          img:  imgItems[i % imgItems.length]
        })
      }
      newData = [...this.state.newsItems, ...newData]
      this.setState({
        newsItems: newData,
        loadingState: ELoadingState.Success
      }, () => {
        showToast('数据刷新成功')
      })
    }, 3000)
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  btn: { 
    width: uwidth(200), 
    height: uwidth(60), 
    justifyContent: 'center', 
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#f0ffff'
  },
  item: {
    height: itemHeight,
    justifyContent: 'center'
  },
  item_top: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  item_top_icon: {
    width: uwidth(80),
    height: uwidth(60),
    borderRadius: uwidth(10),
    margin: uwidth(10)
  },
  item_top_title: {
    fontSize: 18,
    color: '#222',
    marginLeft: uwidth(15)
  },
  item_top_desc: {
    fontSize: 16,
    color: '#444',
    marginLeft: uwidth(10)
  },
  item_date: {
    fontSize: 16,
    color: '#666',
    alignSelf: 'flex-end',
    marginRight: uwidth(15)
  }
})

const mapStateTopProps = (state: IStateTree) => ({
  name: state.user.name,
  password: state.user.password
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
  changeUserInfo: (name: string, password: string) => {
    dispatch(changeUserInfoAction(name, password))
  }
})

const HomePage = connect(mapStateTopProps, mapDispatchToProps)(Page)

export { HomePage }
