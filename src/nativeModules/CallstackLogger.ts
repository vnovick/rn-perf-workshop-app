import {NativeModules} from 'react-native';
const {RNCallStackLogger} = NativeModules;

export const logCallstack = () => {
  RNCallStackLogger.logCallStack((callStackSymbols: unknown) => {
    console.log('Call Stack:', callStackSymbols);
  });
};
