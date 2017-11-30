//
//  CalendarManager.m
//  BaseDemo
//
//  Created by wang on 2017/11/30.
//  Copyright © 2017年 Facebook. All rights reserved.
//
#import "CalendarManager.h"

#import <React/RCTConvert.h>
#import <React/RCTBridge.h>
#import <React/RCTEventDispatcher.h>

@implementation CalendarManager


//默认的RN的方法可以点进去看看
RCT_EXPORT_MODULE()

//对外提供的方法
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location){
  NSLog(@"Pretending to create an event %@ at %@", name, location);
}

//带返回值的
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(nonnull NSNumber *)secondsSinceUnixEpoch){
  NSDate *date = [RCTConvert NSDate:secondsSinceUnixEpoch];
}

//RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location date:(NSString *)ISO8601DateString)
//{
//  NSDate *date = [RCTConvert NSDate:ISO8601DateString];
//}

@end
