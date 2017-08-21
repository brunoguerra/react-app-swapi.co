import {
  PEOPLE,
  PEOPLE_UPDATE,
  PEOPLE_CREATE,
  PEOPLE_REMOVE
} from './PeopleActions'

const initialState = []
let __nextId = 1000
const nextId = () => __nextId++
const newPeople = (action, id) => ({
  [id]: { ...action.payload, id }
})
const removePeople = (state, action) =>
  Object.keys(state)
    .filter((id) => parseInt(id) !== action.payload.id)
    .reduce((mem, id) => ({...mem, [state[id].id]: state[id] }), {})

// Handles image related actions
export default function (state = initialState, action) {
  switch (action.type) {
    case PEOPLE.SUCCESS:
      return ({ ...state, ...action.people })
    case PEOPLE_UPDATE.REQUEST: // hack form mem
      return ({ ...state, [action.payload.id]: action.payload })
    case PEOPLE_CREATE.REQUEST: // hack form mem
      return ({ ...state, ...newPeople(action, nextId()) })
    case PEOPLE_REMOVE.REQUEST: // hack form mem
      return removePeople(state, action)
    default:
      return state
  }
}
