import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import TabNavigator from './TabNavigator';

interface Props {}

const RootNavigator = (props: Props) => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
