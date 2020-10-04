import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { useSelector, useDispatch } from 'react-redux';
import { getCharacter } from '../store/actions';
import { Card, Title, Paragraph } from 'react-native-paper';
import EpisodesList from '../components/EpisodesList';

interface Props {
  route: any,
}

export default function Details({ route }: Props) {
  const { itemId } = route.params;
  const dispatch = useDispatch()
  const item = useSelector((state: any) => state.character.characterSelected);

  useEffect(() => {
    dispatch(getCharacter(itemId));
  }, [])

  return (
    <View style={styles.container}>
      {
        item && (
          <Card style={styles.card}>
            <Card.Content>
              <Title>{item.name}</Title>
            </Card.Content>
            <Card.Cover source={{ uri: item.image }} style={styles.cover} />
            <Card.Content>
              <Paragraph>Status: {item.status}</Paragraph>
              <Paragraph>Species: {item.species}</Paragraph>
              <Paragraph>Gender: {item.gender}</Paragraph>
            </Card.Content>
            <EpisodesList episodes={item.episode} />
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
  cover: {
    height: 240
  }
});
