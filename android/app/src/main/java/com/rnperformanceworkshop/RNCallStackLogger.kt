package com.rnperformanceworkshop
import com.facebook.react.bridge.Callback
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.WritableNativeArray

class RNCallStackLogger(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    override fun getName() = "RNCallStackLogger"

    @ReactMethod
    fun logCallStack(callback: Callback) {
        val stackTraceElements = Thread.currentThread().stackTrace
        // Create a WritableArray to hold the method names
        val methodNamesArray = WritableNativeArray()
        for (element in stackTraceElements) {
            val methodName = "${element.className}.${element.methodName}(${element.fileName}:${element.lineNumber} - isNative: ${element.isNativeMethod}"
            methodNamesArray.pushString(methodName)
        }

        callback.invoke(methodNamesArray)
    }
}