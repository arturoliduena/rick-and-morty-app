import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../components/Themed';
import { useSelector, useDispatch } from 'react-redux';
import { getEpisodes } from '../store/actions';

import { DataTable } from 'react-native-paper';

interface Props {
  navigation: any,
}

export default function TabTwoScreen({ navigation }: Props) {
  const dispatch = useDispatch()
  const episodes = useSelector((state: any) => state.episode.episodes.results);
  const info = useSelector((state: any) => state.episode.episodes.info);
  const [page, setPage] = useState(1);
  
  const navigator = (id: number) => () => navigation.navigate('Episode', { itemId: id});

  useEffect(() => {
    dispatch(getEpisodes(page));
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
          <DataTable.Title style={styles.titleName}>Name</DataTable.Title>
          <DataTable.Title>Episode</DataTable.Title>
        </DataTable.Header>
        <ScrollView style={styles.scrollView}>
          {
            episodes.map((episode: any) => (
              <DataTable.Row key={episode.id} onPress={navigator(episode.id)}>
                <DataTable.Cell style={styles.titleName}>{episode.name}</DataTable.Cell>
                <DataTable.Cell>{episode.episode}</DataTable.Cell>
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
    // height: 10,
  },
  titleName: {
    flex: 1,
    width: 15,
  }
});
