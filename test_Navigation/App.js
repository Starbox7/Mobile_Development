import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import GitHub from './GitHub';

export default function App() {

  // const isValid = true;
  return (
    <NavigationContainer>
      <SafeAreaView>
        <View>
          <Text>GitHub Users Results</Text>
        </View>
          <GitHub />
      </SafeAreaView>
    </NavigationContainer>
  );
}