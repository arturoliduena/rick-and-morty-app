import React, { useEffect, useState } from 'react';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { DataTable } from 'react-native-paper';
import axios from 'axios';


interface Props {
  episodes: string[],
}

interface PropsEpisode {
  episodeUrl: string
}

const Episode = ({ episodeUrl }: PropsEpisode) => {
  const [episode, setEpisode] = useState<any>();
  useEffect(() => {
    axios.get(episodeUrl).then((response: any) => {
      if (response.data){
        setEpisode(response.data)
      }
    })
  }, [])

  return (
    episode ? <DataTable.Row key={episode.id} >
      <DataTable.Cell>{ episode.name }</DataTable.Cell>
      <DataTable.Cell>{ episode.episode} </DataTable.Cell>
    </DataTable.Row> :
      null
  )
};

const EpisodesList = ({ episodes }: Props) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Accordion
      title="Episodes"
      left={props => <List.Icon {...props} icon="folder" />}
      expanded={expanded}
      onPress={handlePress}>
      <DataTable>
        <ScrollView >
          {
            episodes.map((episode: string) => <Episode key={episode} episodeUrl={episode}/>)
          }
        </ScrollView>
      </DataTable>
    </List.Accordion>
  );
};

export default EpisodesList;