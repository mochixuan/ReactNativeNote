import React,{Component} from 'react'
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableHighlight,
} from 'react-native'
import {show} from '../../utils/ToastUtil'
import {
    Avatar,
    Badge,
    ButtonGroup,
    Button,
    Card,
    CheckBox,
    Divider,
    FormLabel,
    FormInput,
    FormValidationMessage,
    Header,
    Icon,
    List,
    ListItem,
    PricingCard,
    Rating,
    SearchBar,
    Slider,
} from 'react-native-elements'

export default class Element1 extends Component {

    constructor(props) {
        super(props);
        this.state={
            selectedIndex1:0,
            selectedIndex2:0,
            checked1:false,
            checked2:false,
            ratingCompleted:0,
            searchBar: '',
            slider1: 0,
        }
    }

    render() {
        const buttons1 = ["Home","Video","Setting"];
        const buttons2 = buttons1.map((item,index)=>{
            return (
                <Text style={{fontSize:18}}>{item}</Text>
            )
        });
        const users = [
            {
                name: 'brynn',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            },
            {
                name: 'brynn',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            },
            {
                name: 'brynn',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            },
            {
                name: 'brynn',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            }
        ]
        const list = [
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
            {
                name: 'Jake',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Tian ya'
            },
            {
                name: 'Bob',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Mo Chi'
            },
            {
                name: 'Body',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Xuan Mo'
            },
        ]

        return (
            <ScrollView style={styles.scroll_view}>
                <View style={styles.base_view_h}>
                    <Avatar
                        source={{uri:'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg'}}
                         //small large medium
                        width={48}
                        height={48}
                        containerStyle={{
                            backgroundColor: '#15b3ff'
                        }}
                        //圆型
                        rounded={true}
                        onPress={()=>{
                            show("点击1")
                        }}
                        avatarStyle={{

                        }}
                        //按压时
                        activeOpacity={0.7}
                    />
                    <Avatar
                        medium
                        containerStyle={{
                            backgroundColor: '#15b3ff'
                        }}
                        title="TY"
                        titleStyle={{
                            color: '#ff4e03'
                        }}
                        //圆型
                        rounded={true}
                        onPress={()=>{
                            show("点击1")
                        }}
                        avatarStyle={{

                        }}
                        //按压时
                        activeOpacity={0.7}
                    />
                    {/*<Avatar
                        medium
                        icon={{
                            name: 'Mcx',
                            color: '#ff4e03',
                        }}
                        overlayContainerStyle={{
                            backgroundColor: '#128fc7'
                        }}
                        containerStyle={{
                            flex: 1,
                        }}
                        //圆型
                        rounded={true}
                        onPress={()=>{
                            show("点击1")
                        }}
                        //按压时
                        activeOpacity={0.7}
                    />*/}
                </View>
                <View style={styles.base_view_h}>
                    <Badge
                        value={3}
                        textStyle={{color: '#fff'}}
                        containerStyle={{
                            margin:6,
                            backgroundColor: '#15b3ff'
                        }}
                    />
                    <Badge containerStyle={{
                        backgroundColor: '#dd5e4d',
                        padding:6}}>
                        <Text style={{padding:6}}>User Wang</Text>
                    </Badge>
                    <Badge
                        component={TouchableHighlight}
                        value={10}
                        containerStyle={{padding:6}}
                    />
                </View>
                <View style={styles.base_view_h}>
                    <ButtonGroup
                        buttons={buttons1}
                        onPress={(index)=>{
                            this.setState({
                                selectedIndex1:index
                            })
                        }}
                        textStyle={{
                            fontSize: 18,
                            color: '#75dd9f'
                        }}
                        selectedTextStyle={{
                            fontSize: 18,
                            color: '#4ea1ff'
                        }}
                        selectedIndex={this.state.selectedIndex1}
                        containerStyle={{
                            height: 60,
                            flex:1,
                        }}
                    />
                    <ButtonGroup
                        buttons={buttons2}
                        onPress={(index)=>{
                            this.setState({
                                selectedIndex2:index
                            })
                        }}
                        textStyle={{
                            fontSize: 18,
                            color: '#75dd9f'
                        }}
                        selectedTextStyle={{
                            fontSize: 18,
                            color: '#4ea1ff'
                        }}
                        selectedIndex={this.state.selectedIndex2}
                        containerStyle={{
                            height: 60,
                            flex:1,
                        }}
                    />
                </View>
                <View style={styles.base_view_h}>
                    <Button
                        title="Button"
                        backgroundColor="#e00000"
                    />
                    <Button
                        iconRight
                        title="LARGE WITH RIGHT ICON"
                        icon={{
                            name:"cached"
                        }}
                    />
                    <Button
                        large
                        title="LARGE WITH RIGHT ICON"
                        icon={{
                            name:"envira",
                            type: 'font-awesome'
                        }}
                        backgroundColor="#467263"
                        onPress={()=>{show("单机了")}}
                        buttonStyle={{
                            borderRadius: 10,
                        }}
                    />
                </View>
                <View style={styles.base_view_h}>
                    <Card title="CARD WITH DIVIDER"
                          containerStyle={{
                              flex:1}} >
                        {
                            users.map((u, i) => {
                                return (
                                    <View key={i} style={{
                                        flex: 1,
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems:'center',
                                        padding:4,
                                        borderBottomColor:'#e0e0e0',
                                        borderBottomWidth:2,}}>
                                        <Image
                                            style={{
                                                width:30,
                                                height:30,
                                                marginRight:10,
                                                borderRadius:15}}
                                            resizeMode="cover"
                                            source={{ uri: u.avatar }}
                                        />
                                        <Text style={{color:"#457575"}}>{u.name}</Text>
                                    </View>
                                );
                            })
                        }
                    </Card>
                    <Card containerStyle={{
                        flex:1}} >
                        {
                            users.map((u, i) => {
                                return (
                                    <ListItem
                                        key={i}
                                        roundAvatar
                                        title={u.name}
                                        avatar={{uri:u.avatar}}
                                    />
                                );
                            })
                        }
                    </Card>
                    <Card
                        containerStyle={{
                            flex:1
                        }}
                        title='Hello Word'
                        image={
                            require('../../img/g3.jpg')}
                        imageStyle={{
                            height:120,
                            padding:10,
                            padding:4,
                        }}>
                        <Text style={{marginBottom: 10}}>
                            The idea with React Native Elements is more about component structure than actual design.
                        </Text>
                        <Button
                            icon={{name: 'code'}}
                            backgroundColor='#03A9F4'
                            fontFamily='Lato'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='VIEW NOW' />
                    </Card>
                </View>
                <View style={styles.base_view_h}>
                    <CheckBox
                        title="男"
                        checked={this.state.checked1}
                        onPress={()=>{
                            this.setState({
                                checked1:!this.state.checked1
                            })
                        }}
                    />
                    <CheckBox
                        center
                        title='Click Here to Remove This Item'
                        iconRight
                        iconType='material'
                        checkedIcon='clear'
                        uncheckedIcon='add'
                        checkedColor='red'
                        checked={this.state.checked2}
                        onPress={()=>{
                            this.setState({
                                checked2:!this.state.checked2
                            })
                        }}
                    />
                </View>
                <View style={styles.base_view_h}>
                    <Divider style={{
                        margin:10,
                        height:2,
                        flex: 1,
                        backgroundColor:'blue'
                    }}/>
                </View>
                <View style={styles.base_view_vb}>
                    <FormLabel
                    labelStyle={{
                        fontSize: 18,
                        color: '#15b3ff'
                    }}>Name</FormLabel>
                    <FormInput />
                    <FormValidationMessage>Tip Message</FormValidationMessage>
                </View>
                <View style={styles.base_view_vb}>
                    <Header
                        statusBarProps={{
                            barStyle: 'light-content',
                            backgroundColor:'#15B3FF'
                        }}
                        backgroundColor="#15B3FF"
                        leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{
                            text: 'MY TITLE',
                            padding: 40,
                            style: {
                                color: '#fff',
                            }
                        }}
                        rightComponent={{ icon: 'home', color: '#fff' }}
                    />
                </View>
                <View style={styles.base_view_h}>
                    <Icon
                        name="rowing"
                    />
                    <Icon
                        name='g-translate'
                        color='#00aced' />

                    <Icon
                        name='sc-telegram'
                        type='evilicon'
                        color='#517fa4'
                    />

                    <Icon
                        reverse
                        name='ios-american-football'
                        type='ionicon'
                        color='#517fa4'
                    />

                    <Icon
                        raised
                        name='heartbeat'
                        type='font-awesome'
                        reverse={true}
                        color='#ffffff'
                        reverseColor="#456789"
                        onPress={() => {show("单机")}} />
                </View>
                <View style={styles.base_view_vb}>
                    <List containerStyle={{marginBottom:20}}>
                        {
                            list.map((l,i)=>(
                                <ListItem
                                    roundAvatar
                                    key={i}
                                    avatar={{uri:l.avatar_url}}
                                    title={l.name}
                                />
                            ))
                        }
                    </List>
                </View>
                <View style={styles.base_view_h}>
                    <PricingCard
                        color='#4f9deb'
                        title='Free'
                        price='$0'
                        info={['1 User', 'Basic Support', 'All Core Features']}
                        button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
                    />
                </View>
                <View style={styles.base_view_vb}>
                    <Rating
                        showRating
                        onFinishRating={(rating)=>{
                            show(rating+"")
                        }}
                        style={{ paddingVertical: 2 }}
                    />
                    <Rating
                        showRating
                        type="star"
                        fractions={1}
                        startingValue={3.6}
                        readonly
                        imageSize={40}
                        style={{ paddingVertical: 2 }}
                    />
                    <Rating
                        type='custom'
                        ratingImage={require('../../img/e1.png')}
                        ratingColor='#3498db'
                        ratingBackgroundColor='#c8c7c8'
                        ratingCount={10}
                        imageSize={30}
                        onFinishRating={this.ratingCompleted}
                        style={{ paddingVertical: 10 }}
                    />
                </View>
                <View style={styles.base_view_vb}>
                    <SearchBar
                        placeholder="请输入"
                        onChangeText={(data)=>{
                            show(data)
                        }}
                    />
                    <SearchBar
                        noIcon
                        placeholder="请输入"
                        onChangeText={(data)=> this.search1 = data }
                    />
                    <Button
                        backgroundColor="#475869"
                        buttonStyle={{
                            borderRadius: 10,
                        }}
                        onPress={()=>{
                            show(this.search1)
                        }}
                        title="查询"
                    />
                    <SearchBar
                        round
                        ref={(search)=> this.search =search}
                        placeholder="请输入"
                        onChangeText={(data)=>{
                            show(data)
                        }}
                    />
                </View>
                <View style={styles.base_view_vb}>
                    <Slider
                        minimumValue={0}
                        maximumValue={100}
                        step={1}
                        value={this.state.slider1}
                        onValueChange={(value)=>{
                            /*this.setState({
                                slider1:value
                            })*/
                        }}
                    />
                    <Text>Value:{this.state.slider1}</Text>
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    scroll_view: {
        flex: 1,
    },
    base_view_h: {
        flex:1,
        justifyContent:'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 6,
        borderBottomColor: '#f5f5f5',
        padding:4,
    },
    base_view_hb: {
        flex:1,
        flexDirection: 'row',
        borderBottomWidth: 6,
        borderBottomColor: '#f5f5f5',
    },
    base_view_v: {
        justifyContent:'center',
        alignItems: 'center',
        flexDirection: 'column',
        borderBottomWidth:4,
        borderBottomColor: '#f5f5f5',
        padding:6,
    },
    base_view_vb: {
        justifyContent:'center',
        flexDirection: 'column',
        borderBottomWidth:4,
        borderBottomColor: '#f5f5f5',
        padding:6,
    }
})