import React from 'react'
import {
  Grid,
  Row,
  HRow,
  Col,
  ContentArea,
  Button
} from '../kit/Layout'
import PeopleForm, { PeopleFormFactory } from './PeopleForm'
import type PeopleType from './People.typed'

type PeopleListPropsType = {
  list: Array<PeopleType>,
  setEditing: (id: number) => void,
  editingId?: number,
  onSubmitEditForm: (values: Object) => void,
  onCancelEditForm: (event: Object) => void,
}

export const peopleAddFormUniqueName = 'PeopleAddForm'
const PeopleAddForm = PeopleFormFactory(peopleAddFormUniqueName)

const PeopleList = ({
  list,
  setEditing,
  editingId,
  onSubmitEditForm,
  onCancelEditForm,
  onSubmitAddForm,
  onRemoveClicked
} : PeopleListPropsType
) => (
  <ContentArea>
    <PeopleAddForm
      onSubmit={onSubmitAddForm}
      initialValues={{name: ''}}
      addMode={true}
    />

    {list && list.length?
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
                <Col>
                  <Button disabled={editingId !== -1} onClick={setEditing(person.id)}>Edit</Button>
                  <Button disabled={editingId !== -1} onClick={onRemoveClicked(person)}>Remove</Button>
                </Col>
              </Row> :
              <PeopleForm
                key={`formPerson${person.id}`}
                onSubmit={onSubmitEditForm}
                onCancelClick={onCancelEditForm}
                initialValues={person}
              />
            }
          </div>
        ))}
      </Grid> : '...' }
  </ContentArea>
)

export default PeopleList
