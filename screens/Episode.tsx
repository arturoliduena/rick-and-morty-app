import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { useSelector, useDispatch } from 'react-redux';
import { getEpisode } from '../store/actions';
import { Card, Title, Paragraph } from 'react-native-paper';
import CharactersList from '../components/CharactersList';
interface Props {
  route: any,
}

export default function Details({ route }: Props) {
  const { itemId } = route.params;
  const dispatch = useDispatch()
  const item = useSelector((state: any) => state.episode.episodeSelected);

  useEffect(() => {
    dispatch(getEpisode(itemId));
  }, [])

  return (
    <View style={styles.container}>
      {
        item && (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.name}</Title>
              <Paragraph>Air Date: {item.air_date}</Paragraph>
              <Paragraph>Episode: {item.episode}</Paragraph>
            </Card.Content>
            <CharactersList characters={item.characters} />
          </Card>

        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingBottom: 1
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
  titleName: {
    flex: 1,
    width: 15,
  },
  card: {
    flex: 1,
  },
});
