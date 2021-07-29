import React from 'react';
import {StatusBar} from 'react-native';
import RootNavigator from './src/navigation/RootNavigator';
interface Props {}

const App = (props: Props) => {
  return (
    <>
      <StatusBar hidden />
      <RootNavigator />
    </>
  );
};

export default App;
