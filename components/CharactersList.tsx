import React, { useEffect, useState } from 'react';
import { List } from 'react-native-paper';
import { ScrollView } from 'react-native';
import { DataTable, Avatar } from 'react-native-paper';
import axios from 'axios';


interface Props {
  characters: string[],
}

interface PropsCharacter {
  characterUrl: string
}

const Character = ({ characterUrl }: PropsCharacter) => {
  const [character, setCharacter] = useState<any>();
  useEffect(() => {
    axios.get(characterUrl).then((response: any) => {
      if (response.data){
        setCharacter(response.data)
      }
    })
  }, [])

  return (
    character ? <DataTable.Row key={character.id} >
      <DataTable.Cell>{ character.name }</DataTable.Cell>
      <DataTable.Cell ><Avatar.Image size={24} source={{ uri: character.image}} /></DataTable.Cell>
    </DataTable.Row> :
      null
  )
};

const CharactersList = ({ characters }: Props) => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Accordion
      title="Characters"
      left={props => <List.Icon {...props} icon="folder" />}
      expanded={expanded}
      onPress={handlePress}>
      <DataTable>
        <ScrollView >
          {
            characters.map((character: string) => <Character key={character} characterUrl={character}/>)
          }
        </ScrollView>
      </DataTable>
    </List.Accordion>
  );
};

export default CharactersList;