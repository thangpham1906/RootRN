import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Button} from 'react-native';
import router from '../../../navigation/router';

export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        title="MOVE TO LISTSONG SCREEN"
        onPress={() => {
          navigation.navigate(router.homeDetailStack, {
            screen: router.listSong,
          });
        }}
      />
    </View>
  );
}
