// RNCallStackLoggerBridge.m
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(RNCallStackLogger, NSObject)

RCT_EXTERN_METHOD(logCallStack:(RCTResponseSenderBlock)callback)

@end