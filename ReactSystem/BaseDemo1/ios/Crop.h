//
//  Crop.h
//  BaseDemo
//
//  Created by wang on 2017/11/30.
//  Copyright © 2017年 Facebook. All rights reserved.
//
#import <UIKit/UIKit.h>

@interface Crop:NSObject<UIImagePickerControllerDelegate,UINavigationControllerDelegate>
-(instancetype)initWithViewController:(UIViewController *)vc;
typedef void(^PickSuccess)(NSDictionary *resultDic);
typedef void(^PickFailure)(NSString* message);
@property (nonatomic, retain) NSMutableDictionary *response;
@property (nonatomic,copy)PickSuccess pickSuccess;
@property (nonatomic,copy)PickFailure pickFailure;
@property(nonatomic,strong)UIViewController *viewController;

-(void)selectImage:(NSDictionary*)option successs:(PickSuccess)success failure:(PickFailure)failure;
@end
/* Crop_h */
