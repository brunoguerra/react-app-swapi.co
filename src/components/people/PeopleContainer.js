// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import PeopleList from './PeopleList'
import { peopleRequestAction } from './PeopleActions'
import { flatNormalizedArray } from '../../fn'

type Props = {
  people: Array<any>,
  editingId: number,
  peopleRequestAction: (void) => void,
}

type State = {
  editingId?: number,
}

class PeopleContainer extends Component<Props, State> {

  state = {
    editingId: -1
  }

  componentDidMount() {
    this.props.peopleRequestAction()
  }

  setEditing = (id) => (event) => {
    event.preventDefault();
    this.setState({
      editingId: id,
    })
  }

  render() {
    return (
      <PeopleList
        list={flatNormalizedArray(this.props.people)}
        setEditing={this.setEditing}
        editingId={this.state.editingId}
      />
    )
  }
}

const mapsToProps = ({ people }) => ({
  people
})

export default connect(mapsToProps, {
  peopleRequestAction
})(PeopleContainer)
