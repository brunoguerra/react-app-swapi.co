import { fork } from 'redux-saga/effects';
import peopleSagas from '../components/people/PeopleSagas'

export default function* startForman() {
  yield fork(peopleSagas)
}
