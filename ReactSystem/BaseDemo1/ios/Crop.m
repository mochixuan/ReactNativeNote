//
//  Crop.m
//  BaseDemo
//
//  Created by wang on 2017/11/30.
//  Copyright © 2017年 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>

#import "Crop.h"
#import <AssetsLibrary/AssetsLibrary.h>
@interface Crop ()
@property(strong,nonatomic)NSDictionary*option;
@end

@implementation Crop
-(instancetype)initWithViewController:(UIViewController *)vc{
  self=[super init];
  self.viewController=vc;
  return self;
}

-(void)selectImage:(NSDictionary*)option successs:(PickSuccess)success failure:(PickFailure)failure{
  self.pickSuccess=success;
  self.pickFailure=failure;
  self.option=option;
  UIImagePickerController *pickerController = [[UIImagePickerController alloc] init];
  pickerController.sourceType = UIImagePickerControllerSourceTypePhotoLibrary;
  pickerController.delegate = self;
  pickerController.allowsEditing = YES;
  [self.viewController presentViewController:pickerController animated:YES completion:nil];
}

//省略部分代码...

#pragma mark 获取临时文件路径
-(NSString*)getTempFile:(NSString*)fileName{
  NSString *imageContent=[[NSSearchPathForDirectoriesInDomains(NSCachesDirectory, NSUserDomainMask, YES) objectAtIndex:0] stringByAppendingString:@"/temp"];
  NSFileManager * fileManager = [NSFileManager defaultManager];
  if (![fileManager fileExistsAtPath:imageContent]) {
    [fileManager createDirectoryAtPath:imageContent withIntermediateDirectories:YES attributes:nil error:nil];
  }
  return [imageContent stringByAppendingPathComponent:fileName];
}
-(NSString*)getFileName:(NSDictionary*)info{
  NSString *fileName;
  NSString *tempFileName = [[NSUUID UUID] UUIDString];
  fileName = [tempFileName stringByAppendingString:@".jpg"];
  return fileName;
}
@end
