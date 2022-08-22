import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyProfile from '../../Containers/MyProfile';
import {MyDrawerScreen, ProfileScreenName} from '../../Constants/ScreenName';
import MyDrawer from '../Drawer';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name={MyDrawerScreen}
          component={MyDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ProfileScreenName}
          component={MyProfile}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </>
  );
};

export default Navigator;
