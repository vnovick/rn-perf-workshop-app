import React from 'react';
import {SafeAreaView, Button} from 'react-native';
import {Footer} from '../components';
import {makeStyles} from '@rneui/themed';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../navigation/AppNavigator';
import {StackNavigationProp} from '@react-navigation/stack';
import {logCallstack} from '../nativeModules/CallstackLogger';

export type TFirstScreenProps = {};

export const FirstScreen: React.FC<TFirstScreenProps> = () => {
  const styles = useStyles();
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>(); // Instantiate navigation

  return (
    <SafeAreaView style={styles.container}>
      <Button onPress={() => logCallstack()} title="Log Callstack" />
      <Button onPress={() => navigation.navigate('Home')} title="Home" />
      <Footer />
    </SafeAreaView>
  );
};

const useStyles = makeStyles(theme => ({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.background,
    paddingBottom: 100,
  },
  avatar: {
    position: 'absolute',
    zIndex: 1,
    top: 80,
  },
}));
