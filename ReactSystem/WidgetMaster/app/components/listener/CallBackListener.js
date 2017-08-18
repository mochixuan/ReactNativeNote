/**
 * Created by wangxuan on 2017/8/18.
 */

import React from 'react'

let mSuccess;
let mFailure;

export default class CallBackListener {

    onSuccess() {
        mSuccess();
    }

    onFailure() {
        mFailure();
    }

    //noinspection JSAnnotator
    setCallBackListener(onSuccess,onFailure){
        mSuccess = onSuccess;
        mFailure = onFailure;
    };

}