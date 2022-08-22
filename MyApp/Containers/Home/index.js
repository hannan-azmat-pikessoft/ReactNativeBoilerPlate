import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';

import styles from './style';
import {ProfileScreenName} from '../../Constants/ScreenName';

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to boilerplate template</Text>
      <Text>Welcome to React Native Home Screen!</Text>
      <Button
        mode="contained"
        color="blue"
        onPress={() => navigation.navigate(ProfileScreenName)}>
        Go to Profile Screen
      </Button>
    </View>
  );
};

export default HomeScreen;
