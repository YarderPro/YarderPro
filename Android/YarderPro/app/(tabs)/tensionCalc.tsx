//jacky


import { Image, StyleSheet, TextInput, Text } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';  
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
  
export default function tensionCalcScreen() {

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />

        //style container - all css
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Title</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Subtitle </ThemedText>

      </ThemedView>
    </ParallaxScrollView>
  );
}

//css
const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });