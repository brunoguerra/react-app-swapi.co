// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PeopleList, { peopleAddFormUniqueName } from './PeopleList'
import {
  peopleRequestAction,
  peopleCreateRequestAction,
  peopleUpdateRequestAction,
  peopleRemoveRequestAction
} from './PeopleActions'
import { reset } from 'redux-form'
import { flatNormalizedArray } from '../../fn'

import type PeopleType from './People.typed'

type Props = {
  people: Array<PeopleType>,
  editingId: number,
  peopleRequestAction: () => void,
  peopleCreateRequestAction: (values: Object) => void,
  peopleUpdateRequestAction: (values: Object) => void,
  peopleRemoveRequestAction: (values: Object) => void,
  resetAddForm: () => void,
}

type State = {
  editingId?: number,
}

export const initialEditingId = -1

const resetAddForm = () => reset(peopleAddFormUniqueName)

class PeopleContainer extends Component<Props, State> {

  state = {
    editingId: initialEditingId
  }

  componentDidMount() {
    return this.props.peopleRequestAction()
  }

  setEditing = (id) => (event) => {
    event.preventDefault();
    this.setState({
      editingId: id,
    })
  }

  onSubmitEditForm = (values) => {
    this.setState({
      editingId: initialEditingId,
    })
    return this.props.peopleUpdateRequestAction(values)
  }

  onSubmitAddForm = (values) => {
    this.props.peopleCreateRequestAction(values)
    this.props.resetAddForm()
  }

  onCancelEditForm = (e) => {
    e.preventDefault()
    this.setState({
      editingId: initialEditingId,
    })
  }

  onRemoveClicked = (payload) => (e) => {
    e.preventDefault()
    return this.props.peopleRemoveRequestAction(payload)
  }

  render() {

    return (
      <PeopleList
        list={flatNormalizedArray(this.props.people)}
        setEditing={this.setEditing}
        editingId={this.state.editingId}
        onSubmitEditForm={this.onSubmitEditForm}
        onCancelEditForm={this.onCancelEditForm}
        onRemoveClicked={this.onRemoveClicked}
        onSubmitAddForm={this.onSubmitAddForm}
      />
    )
  }
}

const mapsToProps = ({ people }) => ({
  people
})

export default connect(mapsToProps, {
  peopleRequestAction,
  peopleCreateRequestAction,
  peopleUpdateRequestAction,
  peopleRemoveRequestAction,
  resetAddForm
})(PeopleContainer)
