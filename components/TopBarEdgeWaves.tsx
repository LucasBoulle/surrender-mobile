import * as React from 'react';
import { StyleSheet, Image } from 'react-native';

interface Props {
  wavePosition: 'bottom' | 'top'
}

export function TopBarEdgeWaves(props: Props) {
  const {wavePosition} = props
  return <Image source={require('../assets/images/edge-waves.png')} style={styles[wavePosition]} />;
}

const styles = StyleSheet.create({
  top: {
    position: 'absolute',
    top: 0,
    resizeMode: 'stretch',
    transform: [{rotate: '180deg'}],
    width: '110%',
    height:  90
  },

  bottom: {
    position: 'absolute',
    bottom: 0,
    resizeMode: 'stretch',
    width: '110%',
    height:  90
  }
})