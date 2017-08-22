import React,{Component} from 'react'
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native'

export default class WView1 extends Component {

    static propTypes = {
        text: React.PropTypes.string,
        textStyle: React.PropTypes.object,
        textAtBehind: React.PropTypes.bool,
        chected: React.PropTypes.bool,
        onClick: React.PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
            chected: props.chected==undefined?false:props.chected,
        }
    }

    render() {
        const imgSource = this.state.chected ?
            require('../img/checkbox_p.png') :
            require('../img/checkbox_n.png');

        const image = (
            <Image
                style={styles.image}
                source={imgSource}
            />
        )

        const text = this.state.chected ?
            (<Text style={[this.props.textStyle,styles.checked_text]}>{this.props.text}</Text>) :
            (<Text style={[this.props.textStyle,styles.check_text]}>{this.props.text}</Text>);

        let container;

        if (this.props.textAtBehind) {
            container = (
                <View style={styles.container}>
                    {image}
                    <View style={styles.view}>
                        {text}
                    </View>
                </View>
            )
        } else {
            container = (
                <View style={styles.container}>
                    <View style={styles.view}>
                        {text}
                    </View>
                    {image}
                </View>
            )
        }

        return(
            <TouchableHighlight
                style={styles.touchview}
                onPress={()=>{
                    if(this.props.onClick) {
                        this.props.onClick(!this.state.chected)
                        this.setState({
                            chected: !this.state.chected
                        })

                    }
                }}
                underlayColor="white">
                {container}
            </TouchableHighlight>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
        padding:4,
    },
    touchview: {
        borderRadius: 8,
        padding: 8,
    },
    image: {
        width: 28,
        height: 28,
        marginLeft:10,
        marginRight:10,
    },
    view: {
        alignItems:'center',
        justifyContent:'center',
        marginLeft:10,
        marginRight:10,
    },
    check_text: {
        fontSize: 18,
    },
    checked_text: {
        fontSize: 18,
        color: '#16a981',
    }
})