import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {HomeScreenName} from '../../Constants/ScreenName';
import axios from 'axios';

const MyProfile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Profile Screen!</Text>
      <Button
        mode="contained"
        color="blue"
        onPress={() => navigation.navigate(HomeScreenName)}>
        Go to Home Screen
      </Button>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyProfile;
