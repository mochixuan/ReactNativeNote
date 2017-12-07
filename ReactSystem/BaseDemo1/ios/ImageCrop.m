//
//  ImageCrop.m
//  BaseDemo
//
//  Created by wang on 2017/11/30.
//  Copyright © 2017年 Facebook. All rights reserved.
//
#import <Foundation/Foundation.h>
#import "ImageCrop.h"
#import "Crop.h"

@interface ImageCrop ()
@property(strong,nonatomic)Crop *crop;
@end

@implementation ImageCrop


RCT_EXPORT_MODULE();

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}
RCT_EXPORT_METHOD(selectWithCrop:(NSInteger)aspectX aspectY:(NSInteger)aspectY resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
{
  UIViewController *root = [[[[UIApplication sharedApplication] delegate] window] rootViewController];
  while (root.presentedViewController != nil) {
    root = root.presentedViewController;
  }
  NSString*aspectXStr=[NSString stringWithFormat: @"%ld",aspectX];
  NSString*aspectYStr=[NSString stringWithFormat: @"%ld",aspectY];
  [[self _crop:root] selectImage:@{@"aspectX":aspectXStr,@"aspectY":aspectYStr} successs:^(NSDictionary *resultDic) {
    resolve(resultDic);
  } failure:^(NSString *message) {
    reject(@"fail",message,nil);
  }];
}

//省略部分代码...

@end
