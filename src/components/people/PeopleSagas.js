import { put, call, takeLatest } from 'redux-saga/effects'
import { listPeople } from '../../api/swapi'
import { PEOPLE } from './PeopleActions'

const normalize = results => results.reduce(
  (mem, result, index) => ({
    ...mem,
    [index]: {
      ...result,
      id: index,
    }
  }), {}
)

export function* getPeople({ payload }) {
  try {
    const peopleRaw = yield call(listPeople, payload)
    const peopleNormilized = normalize(peopleRaw.results)
    yield put({ type: PEOPLE.SUCCESS, people: peopleNormilized })
  } catch (error) {
    yield put({ type: PEOPLE.FAILURE, error })
  }
}

export default function* root() {
  yield takeLatest(PEOPLE.REQUEST, getPeople)
}
