import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View } from '../components/Themed';
import { useSelector, useDispatch } from 'react-redux';
import { getEpisode } from '../store/actions';
import { Button, Card, Title, Paragraph } from 'react-native-paper';

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
            <Card.Actions>
              <Button>Cancel</Button>
              <Button>Ok</Button>
            </Card.Actions>
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
  },
  card: {
    flex: 1,
  },
});
