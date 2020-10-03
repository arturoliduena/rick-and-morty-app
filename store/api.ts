import axios from 'axios';

export const getCharacters = (page: number) => {
  return axios.get('https://rickandmortyapi.com/api/character/', {
    params: {
      page
    }
  })
};

export const getCharacter = (id: number) => {
  return axios.get(`https://rickandmortyapi.com/api/character/${id}`)
};

export const getEpisodes = (page: number) => {
  return axios.get('https://rickandmortyapi.com/api/episode/', {
    params: {
      page
    }
  })
};

export const getEpisode = (id: number) => {
  return axios.get(`https://rickandmortyapi.com/api/episode/${id}`)
};