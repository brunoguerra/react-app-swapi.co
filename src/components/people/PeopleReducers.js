import { PEOPLE } from './PeopleActions'

const initialState = []

// Handles image related actions
export default function (state = initialState, action) {
  switch (action.type) {
    case PEOPLE.SUCCESS:
      return ({ ...state, ...action.people })
    default:
      return state
  }
}
