import React, { Component } from 'react';
import { StyleSheet, View, Animated, PanResponder, } from "react-native";
/* *符合应该是ts语法赋值，不写* as就没用*/
import * as typings from './ViewControl.type';
/*Component两个参数一个为props属性值，一个state状态值*/
export default class ViewControl extends Component {
    constructor() {
        super(...arguments);
        this.state = new typings.State();
        // 上次/当前/动画 x 位移
        this.lastPositionX = null;
        this.positionX = 0;
        this.animatedPositionX = new Animated.Value(0);
        // 上次/当前/动画 y 位移
        this.lastPositionY = null;
        this.positionY = 0;
        this.animatedPositionY = new Animated.Value(0);
        // 缩放大小
        this.scale = 1;
        this.animatedScale = new Animated.Value(1);
        this.zoomLastDistance = null;
        this.zoomCurrentDistance = 0;
        // 滑动过程中，整体横向过界偏移量
        this.horizontalWholeOuterCounter = 0;
        // 滑动过程中，x y的总位移
        this.horizontalWholeCounter = 0;
        this.verticalWholeCounter = 0;
        // 两手距离中心点位置
        this.centerDiffX = 0;
        this.centerDiffY = 0;
        // 上一次点击的时间
        this.lastClickTime = 0;
        // 双击时的位置
        this.doubleClickX = 0;
        this.doubleClickY = 0;
        //上一次单机的位置
        this.preClickX = -1;
        this.preClickY = -1;
        // 是否双击缩放了
        this.isDoubleClickScale = false;
    }
    /*图片区域视图渲染完毕*/
    handleLayout(_event) {
        //this.centerX = event.nativeEvent.layout.x + event.nativeEvent.layout.width / 2
        //this.centerY = event.nativeEvent.layout.y + event.nativeEvent.layout.height / 2
    }
    //改变触摸监听状态
    changeTouchState(isBeWillingTouch) {
        this.setState({
            isBeWillingTouch: isBeWillingTouch
        });
    }
    componentWillMount() {
        this.imagePanResponder = PanResponder.create({
            // 要求成为响应者 这里无法监控是否为两个手指
            onStartShouldSetPanResponder: (_evt, _gestureState) => {
                //this.changeTouchState(true)
                //开始手势操作
                this.lastPositionX = null;
                this.lastPositionY = null;
                this.zoomLastDistance = null;
                this.horizontalWholeCounter = 0;
                this.verticalWholeCounter = 0;
                this.lastTouchStartTime = new Date().getTime();
                this.isDoubleClickScale = false;
                //多个手指
                if (_evt.nativeEvent.changedTouches.length > 1) {
                    this.centerDiffX = (_evt.nativeEvent.changedTouches[0].pageX + _evt.nativeEvent.changedTouches[1].pageX) / 2 - this.props.cropWidth / 2;
                    this.centerDiffY = (_evt.nativeEvent.changedTouches[0].pageY + _evt.nativeEvent.changedTouches[1].pageY) / 2 - this.props.cropHeight / 2;
                }
                // 计算长按(清除上次的长按)
                if (this.longPressTimeout) {
                    clearTimeout(this.longPressTimeout);
                }
                //开始计时了
                this.longPressTimeout = setTimeout(() => {
                    this.props.onLongPress();
                }, this.props.longPressTime);
                //需要改动这里 一个手指的情况
                if (_evt.nativeEvent.changedTouches.length <= 1) {
                    // 认为触发了双击 (300s最为合适可以去看android和ios双击时间)
                    const timedistance = new Date().getTime() - this.lastClickTime;
                    if (this.preClickX == -1) {
                        this.preClickX = _evt.nativeEvent.changedTouches[0].pageX;
                        this.preClickY = _evt.nativeEvent.changedTouches[0].pageY;
                    }
                    if (timedistance < 300 && timedistance > 80) {
                        this.lastClickTime = 0;
                        this.props.onDoubleClick();
                        // 取消长按
                        clearTimeout(this.longPressTimeout);
                        // 因为可能触发放大，因此记录双击时的坐标位置
                        this.doubleClickX = _evt.nativeEvent.changedTouches[0].pageX;
                        this.doubleClickY = _evt.nativeEvent.changedTouches[0].pageY;
                        let doubleDistance = Math.sqrt(Math.pow(this.preClickX - _evt.nativeEvent.changedTouches[0].pageX, 2) +
                            Math.pow(this.preClickY - _evt.nativeEvent.changedTouches[0].pageY, 2));
                        //复位
                        this.preClickX = -1;
                        this.preClickY = -1;
                        //解除双指误触的问题
                        if (doubleDistance < 80) {
                            // 缩放
                            this.isDoubleClickScale = true;
                            if (this.scale > 1 || this.scale < 1) {
                                // 回归原位
                                this.scale = 1;
                                this.positionX = 0;
                                this.positionY = 0;
                            }
                            else {
                                // 开始在位移地点缩放
                                // 记录之前缩放比例
                                // 此时 this.scale 一定为 1
                                const beforeScale = this.scale;
                                // 开始缩放
                                this.scale = 2;
                                // 缩放 diff
                                const diffScale = this.scale - beforeScale;
                                // 找到两手中心点距离页面中心的位移
                                // 移动位置
                                this.positionX = (this.props.cropWidth / 2 - this.doubleClickX) * diffScale / this.scale;
                                this.positionY = (this.props.cropHeight / 2 - this.doubleClickY) * diffScale / this.scale;
                            }
                            Animated.parallel([
                                Animated.timing(this.animatedScale, {
                                    toValue: this.scale,
                                    duration: 100,
                                }),
                                Animated.timing(this.animatedPositionX, {
                                    toValue: this.positionX,
                                    duration: 100,
                                }),
                                Animated.timing(this.animatedPositionY, {
                                    toValue: this.positionY,
                                    duration: 100,
                                })
                            ]).start();
                        }
                    }
                    else {
                        this.lastClickTime = new Date().getTime();
                    }
                }
                return false;
            },
            //
            onMoveShouldSetPanResponder: (_evt, _gestureState) => {
                if (_evt.nativeEvent.changedTouches.length > 1) {
                    this.changeTouchState(true);
                }
                return this.state.isBeWillingTouch;
            },
            //有其他组件请求接替响应者，当前的View是否“放权”？返回true的话则释放响应者权力
            onPanResponderTerminationRequest: (_evt, _gestureState) => {
                return false;
            },
            //开始手势操作。(给用户一些视觉反馈，让他们知道发生了什么事情！)
            onPanResponderGrant: (_evt, _gestureState) => {
                //为了完美兼容左右话，将代码放到申请触摸处。
            },
            // 用户正在屏幕上移动手指时（没有停下也没有离开屏幕） //这里需要修改
            onPanResponderMove: (_evt, _gestureState) => {
                if (_evt.nativeEvent.changedTouches.length <= 1) {
                    // x 位移
                    let diffX = _gestureState.dx - this.lastPositionX;
                    if (this.lastPositionX === null) {
                        diffX = 0;
                    }
                    // y 位移
                    let diffY = _gestureState.dy - this.lastPositionY;
                    if (this.lastPositionY === null) {
                        diffY = 0;
                    }
                    // 保留这一次位移作为下次的上一次位移
                    this.lastPositionX = _gestureState.dx;
                    this.lastPositionY = _gestureState.dy;
                    this.horizontalWholeCounter += diffX;
                    this.verticalWholeCounter += diffY;
                    if (Math.abs(this.horizontalWholeCounter) > 5 || Math.abs(this.verticalWholeCounter) > 5) {
                        // 如果位移超出手指范围，取消长按监听
                        clearTimeout(this.longPressTimeout);
                    }
                    if (this.props.panToMove) {
                        // diffX > 0 表示手往右滑，图往左移动，反之同理
                        // horizontalWholeOuterCounter > 0 表示溢出在左侧，反之在右侧，绝对值越大溢出越多
                        if (this.props.imageWidth * this.scale > this.props.cropWidth) {
                            // 没有溢出偏移量或者这次位移完全收回了偏移量才能拖拽
                            if (this.horizontalWholeOuterCounter > 0) {
                                if (diffX < 0) {
                                    if (this.horizontalWholeOuterCounter > Math.abs(diffX)) {
                                        this.changeTouchState(false);
                                        // 偏移量还没有用完
                                        this.horizontalWholeOuterCounter += diffX;
                                        diffX = 0;
                                    }
                                    else {
                                        this.changeTouchState(true);
                                        // 溢出量置为0，偏移量减去剩余溢出量，并且可以被拖动
                                        diffX += this.horizontalWholeOuterCounter;
                                        this.horizontalWholeOuterCounter = 0;
                                        this.props.horizontalOuterRangeOffset(0);
                                    }
                                }
                                else {
                                    this.changeTouchState(false);
                                    this.horizontalWholeOuterCounter += diffX;
                                }
                            }
                            else if (this.horizontalWholeOuterCounter < 0) {
                                if (diffX > 0) {
                                    if (Math.abs(this.horizontalWholeOuterCounter) > diffX) {
                                        this.changeTouchState(false);
                                        // 偏移量还没有用完
                                        this.horizontalWholeOuterCounter += diffX;
                                        diffX = 0;
                                    }
                                    else {
                                        this.changeTouchState(true);
                                        // 溢出量置为0，偏移量减去剩余溢出量，并且可以被拖动
                                        diffX += this.horizontalWholeOuterCounter;
                                        this.horizontalWholeOuterCounter = 0;
                                        this.props.horizontalOuterRangeOffset(0);
                                    }
                                }
                                else {
                                    this.changeTouchState(false);
                                    this.horizontalWholeOuterCounter += diffX;
                                }
                            }
                            else {
                                // 溢出偏移量为0，正常移动
                                if (diffX != 0 && diffX != this.horizontalWholeCounter) {
                                    this.changeTouchState(true);
                                }
                            }
                            // 产生位移
                            this.positionX += diffX / this.scale;
                            // 但是横向不能出现黑边
                            // 横向能容忍的绝对值
                            const horizontalMax = (this.props.imageWidth * this.scale - this.props.cropWidth) / 2 / this.scale;
                            if (this.positionX < -horizontalMax) {
                                this.positionX = -horizontalMax;
                                // 让其产生细微位移，偏离轨道
                                this.horizontalWholeOuterCounter += -1 / 1e10;
                            }
                            else if (this.positionX > horizontalMax) {
                                this.positionX = horizontalMax;
                                // 让其产生细微位移，偏离轨道
                                this.horizontalWholeOuterCounter += 1 / 1e10;
                            }
                            this.animatedPositionX.setValue(this.positionX);
                        }
                        else {
                            // 不能横向拖拽，全部算做溢出偏移量
                            this.horizontalWholeOuterCounter += diffX;
                            this.changeTouchState(false);
                        }
                        // 溢出量不会超过设定界限
                        if (this.horizontalWholeOuterCounter > this.props.maxOverflow) {
                            this.horizontalWholeOuterCounter = this.props.maxOverflow;
                        }
                        else if (this.horizontalWholeOuterCounter < -this.props.maxOverflow) {
                            this.horizontalWholeOuterCounter = -this.props.maxOverflow;
                        }
                        if (this.horizontalWholeOuterCounter !== 0) {
                            // 如果溢出偏移量不是0，执行溢出回调
                            this.props.horizontalOuterRangeOffset(this.horizontalWholeOuterCounter);
                        }
                        if (this.props.imageHeight * this.scale > this.props.cropHeight) {
                            // 如果图片高度大图盒子高度， 可以纵向拖拽
                            this.positionY += diffY / this.scale;
                            this.animatedPositionY.setValue(this.positionY);
                        }
                    }
                }
                else {
                    // 多个手指的情况
                    // 取消长按状态
                    if (this.longPressTimeout) {
                        clearTimeout(this.longPressTimeout);
                    }
                    if (this.props.pinchToZoom) {
                        // 找最小的 x 和最大的 x
                        let minX;
                        let maxX;
                        if (_evt.nativeEvent.changedTouches[0].locationX > _evt.nativeEvent.changedTouches[1].locationX) {
                            minX = _evt.nativeEvent.changedTouches[1].pageX;
                            maxX = _evt.nativeEvent.changedTouches[0].pageX;
                        }
                        else {
                            minX = _evt.nativeEvent.changedTouches[0].pageX;
                            maxX = _evt.nativeEvent.changedTouches[1].pageX;
                        }
                        let minY;
                        let maxY;
                        if (_evt.nativeEvent.changedTouches[0].locationY > _evt.nativeEvent.changedTouches[1].locationY) {
                            minY = _evt.nativeEvent.changedTouches[1].pageY;
                            maxY = _evt.nativeEvent.changedTouches[0].pageY;
                        }
                        else {
                            minY = _evt.nativeEvent.changedTouches[0].pageY;
                            maxY = _evt.nativeEvent.changedTouches[1].pageY;
                        }
                        const widthDistance = maxX - minX;
                        const heightDistance = maxY - minY;
                        const diagonalDistance = Math.sqrt(widthDistance * widthDistance + heightDistance * heightDistance);
                        this.zoomCurrentDistance = Number(diagonalDistance.toFixed(1));
                        //debug模式下将图片放大,两个手指合并放到图片之后有严重抖动，后崩溃
                        if (this.zoomLastDistance !== null) {
                            let distanceDiff = (this.zoomCurrentDistance - this.zoomLastDistance) / 200;
                            let zoom = this.scale + distanceDiff;
                            if (zoom < 0.6) {
                                zoom = 0.6;
                            }
                            if (zoom > 10) {
                                zoom = 10;
                            }
                            // 记录之前缩放比例
                            const beforeScale = this.scale;
                            // 开始缩放
                            this.scale = zoom;
                            this.animatedScale.setValue(this.scale);
                            // 图片要慢慢往两个手指的中心点移动
                            // 缩放 diff
                            const diffScale = this.scale - beforeScale;
                            // 找到两手中心点距离页面中心的位移
                            // 移动位置
                            this.positionX -= this.centerDiffX * diffScale / this.scale;
                            this.positionY -= this.centerDiffY * diffScale / this.scale;
                            this.animatedPositionX.setValue(this.positionX);
                            this.animatedPositionY.setValue(this.positionY);
                        }
                        this.zoomLastDistance = this.zoomCurrentDistance;
                    }
                }
            },
            //触摸操作结束时触发，比如"touchUp"（手指抬起离开屏幕）
            onPanResponderRelease: (_evt, _gestureState) => {
                // 双击缩放了，结束手势就不需要操作了
                if (this.isDoubleClickScale) {
                    return;
                }
                if (this.scale < 1) {
                    // 如果缩放小于1，强制重置为 1
                    this.scale = 1;
                    Animated.timing(this.animatedScale, {
                        toValue: this.scale,
                        duration: 100,
                    }).start();
                }
                if (this.props.imageWidth * this.scale <= this.props.cropWidth) {
                    // 如果图片宽度小于盒子宽度，横向位置重置
                    this.positionX = 0;
                    Animated.timing(this.animatedPositionX, {
                        toValue: this.positionX,
                        duration: 100,
                    }).start();
                }
                if (this.props.imageHeight * this.scale <= this.props.cropHeight) {
                    // 如果图片高度小于盒子高度，纵向位置重置
                    this.positionY = 0;
                    Animated.timing(this.animatedPositionY, {
                        toValue: this.positionY,
                        duration: 100,
                    }).start();
                }
                // 横向肯定不会超出范围，由拖拽时控制
                // 如果图片高度大于盒子高度，纵向不能出现黑边
                if (this.props.imageHeight * this.scale > this.props.cropHeight) {
                    // 纵向能容忍的绝对值
                    const verticalMax = (this.props.imageHeight * this.scale - this.props.cropHeight) / 2 / this.scale;
                    if (this.positionY < -verticalMax) {
                        this.positionY = -verticalMax;
                    }
                    else if (this.positionY > verticalMax) {
                        this.positionY = verticalMax;
                    }
                    Animated.timing(this.animatedPositionY, {
                        toValue: this.positionY,
                        duration: 100,
                    }).start();
                }
                // 拖拽正常结束后,如果没有缩放,直接回到0,0点
                if (this.scale === 1) {
                    this.positionX = 0;
                    this.positionY = 0;
                    Animated.timing(this.animatedPositionX, {
                        toValue: this.positionX,
                        duration: 100,
                    }).start();
                    Animated.timing(this.animatedPositionY, {
                        toValue: this.positionY,
                        duration: 100,
                    }).start();
                }
                // 水平溢出量置空
                this.horizontalWholeOuterCounter = 0;
                // 取消长按
                if (this.longPressTimeout) {
                    clearTimeout(this.longPressTimeout);
                }
                // 手势完成,如果是单个手指、距离上次按住只有预设秒、滑动距离小于预设值,认为是单击
                const stayTime = new Date().getTime() - this.lastTouchStartTime;
                const moveDistance = Math.sqrt(_gestureState.dx * _gestureState.dx + _gestureState.dy * _gestureState.dy);
                if (_evt.nativeEvent.changedTouches.length === 1 && stayTime < this.props.leaveStayTime && moveDistance < this.props.leaveDistance) {
                    this.props.onClick();
                }
                else {
                    this.props.responderRelease(_gestureState.vx, this.scale);
                }
            },
            // 响应者权力已经交出。这可能是由于其他View通过onResponderTerminationRequest请求的，也可能是由操作系统强制夺权（比如iOS上的控制中心或是通知中心）
            onPanResponderTerminate: (_evt, _gestureState) => {
                if (this.longPressTimeout) {
                    clearTimeout(this.longPressTimeout);
                }
            }
        });
    }
    render() {
        const animateConf = {
            transform: [{
                    scale: this.animatedScale
                }, {
                    translateX: this.animatedPositionX
                }, {
                    translateY: this.animatedPositionY
                }]
        };
        return (<View style={[styles.container, {
                width: this.props.cropWidth,
                height: this.props.cropHeight,
            }]} {...this.imagePanResponder.panHandlers}>
                <Animated.View style={animateConf}>
                    <View onLayout={this.handleLayout.bind(this)} style={{
            width: this.props.imageWidth,
            height: this.props.imageHeight,
        }}>
                        {this.props.children}
                    </View>
                </Animated.View>
            </View>);
    }
}
//赋值
ViewControl.defaultProps = new typings.Props();
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: 'transparent',
    },
});
//# sourceMappingURL=ViewControl.js.map