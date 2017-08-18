import Toast from 'react-native-root-toast'

const show = (data) => {

    Toast.show(data,{
        duration: Toast.durations.LONG,
        position: -80,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
        backgroundColor: '#000080',
        textColor: '#f5f5f5',
        shadowColor: '#FF2400',
        onShow: ()=>{

        },
        onShown: ()=>{

        },
        onHide: ()=>{

        },
        onHiden: ()=>{

        },
    });

}

export {show}
