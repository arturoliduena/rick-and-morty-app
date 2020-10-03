import { combineReducers } from 'redux'
import {
  ADD_CHARACTERS,
  GET_CHARACTER,
  ADD_CHARACTER_SELECTED,
  ADD_EPISODES,
  GET_EPISODE,
  ADD_EPISODE_SELECTED,
} from './actions'

const initialStateCharacter = {
  characters: {
    info: {
      pages: 0,
    },
    results: [],
  },
  characterSelected: null,
};
function character(state = initialStateCharacter, action: any) {
  switch (action.type) {
    case ADD_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      }
    case ADD_CHARACTER_SELECTED:
      return {
        ...state,
        characterSelected: action.payload,
      }
    case GET_CHARACTER:
      return {
        ...state,
        characterSelected: null,
      }
    default:
      return state
  }
}

const initialStateEpisode = {
  episodes: {
    info: {
      pages: 0,
    },
    results: [],
  },
  episodeSelected: null,
};

function episode(state = initialStateEpisode, action: any) {
  switch (action.type) {
    case ADD_EPISODES:
      return {
        ...state,
        episodes: action.payload,
      }
    case GET_EPISODE:
      return {
        ...state,
        episodeSelected: null,
      }
    case ADD_EPISODE_SELECTED:
      return {
        ...state,
        episodeSelected: action.payload,
      }
    default:
      return state
  }
}

const reducers = combineReducers({
  character,
  episode
})

export default reducers;