/*
 * action types
 */

export const GET_CHARACTER = 'GET_CHARACTER'
export const ADD_CHARACTER_SELECTED = 'ADD_CHARACTER_SELECTED'
export const GET_CHARACTERS = 'GET_CHARACTERS'
export const ADD_CHARACTERS = 'ADD_CHARACTERS'
export const GET_EPISODE = 'GET_EPISODE'
export const ADD_EPISODE_SELECTED = 'ADD_EPISODE_SELECTED'
export const GET_EPISODES = 'GET_EPISODES'
export const ADD_EPISODES = 'ADD_EPISODES'
/*
 * action creators
 */

export function getCharacter(id: number) {
  return { type: GET_CHARACTER, id }
}

export function addCharacterSelected(payload: any) {
  return { type: ADD_CHARACTER_SELECTED, payload }
}

export function getCharacters(page: number) {
  return { type: GET_CHARACTERS, page }
}

export function addCharacters(payload: any) {
  return { type: ADD_CHARACTERS, payload }
}

export function getEpisode(id: number) {
  return { type: GET_EPISODE, id }
}

export function addEpisodeSelected(payload: any) {
  return { type: ADD_EPISODE_SELECTED, payload }
}

export function getEpisodes(page: number) {
  return { type: GET_EPISODES, page }
}

export function addEpisodes(payload: any) {
  return { type: ADD_EPISODES, payload }
}