import { takeEvery, fork, put, call, all } from 'redux-saga/effects';
import * as actions from './actions';
import { getCharacters, getCharacter, getEpisodes, getEpisode } from './api';

// create a generator function
function* fetchCharacters(action: any) {
  // try to make the api call
  try {
    // yield the api responsse into data
    const payload = yield call(getCharacters, action.page);
    yield put(actions.addCharacters(payload.data))
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchCharacters() {
  yield takeEvery(actions.GET_CHARACTERS, fetchCharacters);
}

// create a generator function
function* fetchCharacter(action: any) {
  // try to make the api call
  try {
    // yield the api responsse into data
    const payload = yield call(getCharacter, action.id);
    yield put(actions.addCharacterSelected(payload.data))
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchCharacter() {
  yield takeEvery(actions.GET_CHARACTER, fetchCharacter);
}

// create a generator function
function* fetchEpisodes(action: any) {
  // try to make the api call
  try {
    // yield the api responsse into data
    const payload = yield call(getEpisodes, action.page);
    yield put(actions.addEpisodes(payload.data))
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchEpisodes() {
  yield takeEvery(actions.GET_EPISODES, fetchEpisodes);
}

// create a generator function
function* fetchEpisode(action: any) {
  // try to make the api call
  try {
    // yield the api responsse into data
    const payload = yield call(getEpisode, action.id);
    yield put(actions.addEpisodeSelected(payload.data))
  } catch (e) {
    console.log(e);
  }
}

function* watchFetchEpisode() {
  yield takeEvery(actions.GET_EPISODE, fetchEpisode);
}

const Sagas = [
  fork(watchFetchCharacters),
  fork(watchFetchCharacter),
  fork(watchFetchEpisodes),
  fork(watchFetchEpisode),
];

export default function* rootSaga() {
  yield all([
    ...Sagas,
  ]);
}