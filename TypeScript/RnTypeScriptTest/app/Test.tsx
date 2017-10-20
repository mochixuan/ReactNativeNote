import React,{Component} from 'react'
import ReactNative,{
    StyleSheet,
    View,
    Text,
} from "react-native";

/*
*
* 1.  npm install -g typescript
* 2.  npm install typescript
* 3.  tsc --init
* 4.  npm install -g tsd
* 5.  //tsd init && tsd install react-native --save
* 6.  yarn add --dev react-native-typescript-transformer typescript @types/react @types/react-native
*
* */

export default class Test extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    TypeScript
                </Text>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5383ff",
    } as ReactNative.ViewStyle,

    text: {
        fontSize: 20,
        textAlign: "center",
        margin: 10,
    } as ReactNative.TextStyle,
});