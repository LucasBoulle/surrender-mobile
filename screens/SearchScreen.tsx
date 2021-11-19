import * as React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import { Colors } from '../assets/Colors';
import { TopBarEdgeWaves } from '../components/TopBarEdgeWaves';
import { useSurrenderApi } from '../hooks/useSurrenderApi';

import { RootStackScreenProps } from '../types';
export default function SearchScreen({ navigation }: RootStackScreenProps<'Search'>) {
  const [summonerName, setSummonerName] = React.useState('')
  const [searchSuccess, searchError, searchIsLoading, doSearch, resetSearch] =
    useSurrenderApi({ path: '/summoner/by-name' })
  const [errorMessageDisplayed, setErrorMessageDisplayed] = React.useState(false)

  const submit = React.useCallback(() => {
    doSearch({ summonerName })
  }, [summonerName])

  React.useEffect(() => {
    if (searchSuccess) {
      if (searchSuccess.id) {
        // @ts-ignore
        navigation.navigate('Profile', {
          puuid: searchSuccess.puuid,
          accountId: searchSuccess.accountId,
          name: searchSuccess.name,
          summonerLevel: searchSuccess.summonerLevel,
          summonerId: searchSuccess.id
        })
      } else {
        setErrorMessageDisplayed(true)
      }
    }
  }, [searchSuccess])

  React.useEffect(() => {
    if (searchError) {
      setErrorMessageDisplayed(true)
    }
  }, [searchError])

  return (
    <View style={styles.container}>
      <TopBarEdgeWaves wavePosition="top" />
      <TopBarEdgeWaves wavePosition="bottom" />
      <Text style={styles.title}>surrender.gg</Text>
      <TextInput
        placeholder="Pesquisar"
        style={styles.searchTextInput}
        placeholderTextColor={Colors.pink}
        onChangeText={setSummonerName}
      />
      <TouchableOpacity onPress={() => submit()} style={styles.link}>
        <Text style={styles.linkText}>Pesquisar</Text>
        {errorMessageDisplayed && (
          <Text style={styles.error}>Jogador não encontrado</Text>
        )}
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
  error: {
    fontSize: 14,
    color: Colors.red,
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
