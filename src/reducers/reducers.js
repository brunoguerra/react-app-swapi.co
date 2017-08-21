import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import people from '../components/people/PeopleReducers'

const rootReducer = combineReducers({
  form: formReducer,
  people
})

export default rootReducer
