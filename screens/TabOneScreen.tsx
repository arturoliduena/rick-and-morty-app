import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { View } from '../components/Themed';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacters } from '../store/actions';

import { DataTable, Avatar } from 'react-native-paper';

interface Props {
  navigation: any,
}
export default function TabOneScreen({ navigation } : Props) {
  const dispatch = useDispatch()
  const characters = useSelector((state: any) => state.character.characters.results);
  const info = useSelector((state: any) => state.character.characters.info);
  const [page, setPage] = useState(1);
  
  const navigator = (id: number) => () => navigation.navigate('Character', { itemId: id});

  useEffect(() => {
    dispatch(getCharacters(page));
  }, [page])

  const onPageChange = (nextPage: number) => {
    if(nextPage && nextPage <= info.pages){
      setPage(nextPage);
    }
  }

  return (
    <View style={styles.container}>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Image</DataTable.Title>
          <DataTable.Title style={styles.titleName}>name</DataTable.Title>
          <DataTable.Title>status</DataTable.Title>
        </DataTable.Header>
        <ScrollView style={styles.scrollView}>
          {
            characters.map((character: any) => (
              <DataTable.Row key={character.id} onPress={navigator(character.id)}>
                <DataTable.Cell ><Avatar.Image size={24} source={{ uri: character.image}} /></DataTable.Cell>
                <DataTable.Cell style={styles.titleName}>{character.name}</DataTable.Cell>
                <DataTable.Cell>{character.status}</DataTable.Cell>
              </DataTable.Row>
            ))
          }
        </ScrollView>

        <DataTable.Pagination
          page={page}
          numberOfPages={info.pages + 1}
          onPageChange={onPageChange}
          label={`page ${page} of ${info.pages}`}
        />
      </DataTable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    color: 'red'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  scrollView: {
    height: '80%',
  },
  titleName: {
    flex: 1,
    width: 15,
    color: 'red'

  }
});
