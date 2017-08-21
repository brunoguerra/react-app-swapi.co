import React from 'react'
import {
  Grid,
  Row,
  HRow,
  Col,
  ContentArea,
  Button
} from '../kit/Layout'

import type PeopleType from './People.typed'

type PeopleListPropsType = {
  list: Array<PeopleType>,
  setEditing: (id: number) => void,
  editingId?: number
}

const PeopleList = (
  { list, setEditing, editingId } : PeopleListPropsType
) => (
  <ContentArea>
    { list && list.length?
      <Grid>
        <HRow>
          <Col>Id</Col>
          <Col>Name</Col>
          <Col>Action</Col>
        </HRow>
        {list.map((person) => (
          <div key={person.id}>
            { person.id !== editingId ?
              <Row key={person.id}>
                <Col>{person.id}</Col>
                <Col>{person.name}</Col>
                <Button onClick={setEditing(person.id)}>Edit</Button>
              </Row> :
              <div>form here</div>
            }
          </div>
        ))}
      </Grid> : '...' }
  </ContentArea>
)

export default PeopleList
