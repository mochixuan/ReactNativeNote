import React,{Component} from 'react'
import {
    View,
    StyleSheet,
    Dimensions,
    StatusBar,
    TextInput,
    Text,
    ActivityIndicator,
    TouchableOpacity,
    BackHandler,
    Platform,
    SafeAreaView,
    Animated
} from 'react-native'
import WXWebView from 'react-native-wxwebview'

const {width,height} = Dimensions.get('window')

const main_bg_color = '#192331'
export default class WebViewPage extends Component{

    constructor(props) {
        super(props)

        this.wbProgress = new Animated.Value(0)
        this.state = {
            backButtonEnabled: false,
        }
    }

    componentDidMount () {
        if (Platform.OS === 'android') {
            BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid)
        }
    }

    componentWillUnmount () {
        if (Platform.OS === 'android') {
            BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid)
        }
    }

    onNavigationStateChange = (navState: any) => {
        this.setState({
            backButtonEnabled: navState.canGoBack,
        })
    }

    onBackAndroid = () => {
        if (this.state.backButtonEnabled) {
            this.wbRef.goBack()
            return true
        } else {
            let wbProgress = this.wbProgress
            if (wbProgress._value !== 1) {
                this.wbRef.goBack()
                return true
            }
            return false
        }
    }

    render() {
        const progress = this.wbProgress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, width]
        })

        return (
            <SafeAreaView style={{flex: 1,backgroundColor: main_bg_color}}>
                <StatusBar barStyle = 'light-content' backgroundColor={main_bg_color}/>
                <View style={styles.search}>
                    <Text style={{color: '#fff',fontSize: 23}}>{'打击好'}</Text>
                </View>
                <Animated.View style={[styles.progress, { width: progress }]}/>
                <WXWebView
                    ref={this.webviewRef}
                    bounces={false}
                    source={{ uri: "https://www.baidu.com" }}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    startInLoadingState={true}
                    onMessage={this.onMessage}
                    onLoadProgress={this.onLoadProgress}
                    onLoadStart={this.onLoadStart}
                    onLoadEnd={this.onLoadEnd}
                    onError={this.onError}

                    renderLoading={this._renderWBLoadingView}

                    style={styles.web_view}
                    onNavigationStateChange={this.onNavigationStateChange}
                />
            </SafeAreaView >
        )
    }

    _renderWBLoadingView = () => {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size={'large'} color={'#fff'} />
                <Text>{'Loading'}</Text>
            </View>
        )
    }

    onMessage = (msg) => {

    }

    webviewRef = (ref) => {
        this.wbRef = ref
        return this.wbRef
    }

    onLoadStart = (event) => {
        this.refreshProgress(0)
    }

    onLoadProgress = (event) => {
        if (event && event.nativeEvent && event.nativeEvent.progress) {
            this.refreshProgress(event.nativeEvent.progress)
        }
    }

    refreshProgress = (toProgess) => {
        Animated.timing(this.wbProgress, {
            toValue: toProgess,
            duration: toProgess === 0 ? 0 : 300
        }).start()
    }

    onLoadEnd = (event) => {
        this.refreshProgress(1)
    }

    onError = () => {
        console.warn('onError')
    }

    reLoad = () => {
        this.wbRef.reload()
    }

}


const text_color = '#f0f0f0'
const main_color = '#222222'
const minor_color = '#3aafff'
const main_half_color = 'rgba(255,255,255,0.5)'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: main_color
    },
    search: {
        height: 44,
        width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: main_color
    },
    search_view: {
        width: width*0.8,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#565656'
    },
    search_input: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        color: text_color,
        fontSize: 14,
        padding: 0
    },
    web_view: {
        width: width,
        flex: 1
    },
    bottom: {
        height: 49,
        width,
        backgroundColor: main_color,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottom_text: {
        color: text_color,
        fontSize: 18,
        fontWeight: 'bold'
    },
    loading: {
        flex: 1,
        width,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: main_half_color,
        marginBottom: 10
    },
    base_text: {
        color: text_color,
        fontSize: 18,
        fontWeight: 'bold'
    },
    base_button: {
        height: 40,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 20,
        marginTop: 30,
        justifyContent: 'center',
        backgroundColor: minor_color
    },
    progress: {
        height: 6,
        backgroundColor: '#f00',
        marginBottom: -1
    },
})
