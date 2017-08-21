import { combineReducers } from 'redux'
import people from '../components/people/PeopleReducers'

const rootReducer = combineReducers({
  people
})

export default rootReducer
