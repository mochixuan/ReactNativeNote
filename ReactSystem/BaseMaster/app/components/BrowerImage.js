import React,{Component} from 'react'

import {
    View,
    Dimensions,
    Image,
} from 'react-native'
import Gallery from 'react-native-gallery'

const {width,height} = Dimensions.get('window');
import ImageViewr from 'react-native-image-zoom-viewer'

export default class BrowerImage extends Component {

    render() {

        const images = [
            {url:'http://gaopin-preview.bj.bcebos.com/133203248180.jpg'},
            {url:'http://gaopin-preview.bj.bcebos.com/133203230743.jpg'},
            {url:'http://gaopin-preview.bj.bcebos.com/133100648484.jpg'},
            {url:'http://gaopin-preview.bj.bcebos.com/133200432045.jpg'},
            {url:'http://gaopin-preview.bj.bcebos.com/133201437689.jpg'},
            {url:'http://gaopin-preview.bj.bcebos.com/133201443434.jpg'},
        ]

        return (
            <ImageViewr
                imageUrls={images}
            />
        )
    }

}