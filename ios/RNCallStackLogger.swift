
import Foundation
import React

@objc(RNCallStackLogger)
class RNCallStackLogger: NSObject {
  
  @objc
  func constantsToExport() -> [AnyHashable: Any]! {
    return ["someConstant": "someValue"]
  }
  
  @objc(logCallStack:)
  func logCallStack(callback: RCTResponseSenderBlock) {
    let callStackSymbols = Thread.callStackSymbols
    // Send the call stack back to JavaScript using the callback
    callback([callStackSymbols])
  }
  
  // React Native bridge methods need to be exposed individually
  @objc
  static func requiresMainQueueSetup() -> Bool {
    return true
  }
}
