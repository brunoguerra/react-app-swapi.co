import { createRequestTypes } from '../../actions/action-types'

export const PEOPLE = createRequestTypes('people')
export const PEOPLE_UPDATE = createRequestTypes('peopleUpdate')
export const PEOPLE_CREATE = createRequestTypes('peopleCreate')
export const PEOPLE_REMOVE = createRequestTypes('peopleRemove')

export const peopleRequestAction = () => ({
  type: PEOPLE.REQUEST
})

export const peopleUpdateRequestAction = (payload) => ({
  type: PEOPLE_UPDATE.REQUEST,
  payload
})

export const peopleCreateRequestAction = (payload) => ({
  type: PEOPLE_CREATE.REQUEST,
  payload
})

export const peopleRemoveRequestAction = (payload) => ({
  type: PEOPLE_REMOVE.REQUEST,
  payload
})
