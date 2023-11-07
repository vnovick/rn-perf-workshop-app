import React, {useEffect, useState} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {AppNavigator} from './navigation/AppNavigator';
import {ThemeProvider, createTheme} from '@rneui/themed';
import {useFlipper} from '@react-navigation/devtools';
import RNAsyncStorageFlipper from 'rn-async-storage-flipper';
import AsyncStorage from '@react-native-community/async-storage';
import {
  hasMigratedFromAsyncStorage,
  migrateFromAsyncStorage,
} from './utils/storage';
import {ActivityIndicator, InteractionManager, View} from 'react-native';

RNAsyncStorageFlipper(AsyncStorage);
const theme = createTheme({
  darkColors: {
    primary: '#0971f1',
    secondary: '#f2f2f2',
  },
  components: {
    Button: {
      raised: true,
    },
  },
});

const App: React.FC = () => {
  const [hasMigrated, setHasMigrated] = useState(hasMigratedFromAsyncStorage);
  const navigationRef = useNavigationContainerRef();

  useEffect(() => {
    AsyncStorage.setItem(
      'dummyObj',
      JSON.stringify({
        dummyObj: new Array(1000).fill(1).map(() => Math.random()),
      }),
    );
  }, []);

  useEffect(() => {
    if (!hasMigratedFromAsyncStorage) {
      InteractionManager.runAfterInteractions(async () => {
        try {
          await migrateFromAsyncStorage();
          setHasMigrated(true);
        } catch (e) {
          // TODO: fall back to AsyncStorage? Wipe storage clean and use MMKV? Crash app?
        }
      });
    }
  }, []);

  useFlipper(navigationRef);

  if (!hasMigrated) {
    // show loading indicator while app is migrating storage...
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color="black" />
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
