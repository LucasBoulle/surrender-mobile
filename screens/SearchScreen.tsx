import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import { Colors } from '../assets/Colors';
import { TopBarEdgeWaves } from '../components/TopBarEdgeWaves';

import { RootStackScreenProps } from '../types';
export default function SearchScreen({ navigation }: RootStackScreenProps<'NotFound'>) {
  return (
    <View style={styles.container}>
      <TopBarEdgeWaves wavePosition="top" />
      <TopBarEdgeWaves wavePosition="bottom" />
      <Text style={styles.title}>surrender.gg</Text>
      <TextInput placeholder="Pesquisar" style={styles.searchTextInput} placeholderTextColor={Colors.pink} />
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: Colors.pink,
    marginBottom: 50
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  searchTextInput: {
    borderColor: Colors.pink,
    color: Colors.pink,
    borderWidth: 5,
    width: '70%',
    height: 40,
    padding: 10,
    borderRadius: 10
  }
});