import { createRequestTypes } from '../../actions/action-types'

export const PEOPLE = createRequestTypes('people')

export const peopleRequestAction = () => ({
  type: PEOPLE.REQUEST
})
