// @flow

import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Button } from '../kit/Layout'

type PeopleFormPropsType = {
  handleSubmit: () => void,
  onCancelClick?: (Object) => void,
  addMode: boolean
}

const PeopleForm = ({
  handleSubmit, onCancelClick, addMode
} : PeopleFormPropsType ) => (
  <form onSubmit={handleSubmit}>
    <div>
      <label htmlFor="name">Name</label>
      <Field name="name" component="input" type="text"/>
    </div>
    <div>
      <label>Gender</label>
      <div>
        <label><Field name="gender" component="input" type="radio" value="female"/> Female</label>
        <label><Field name="gender" component="input" type="radio" value="male"/> Male</label>
        <label><Field name="gender" component="input" type="radio" value="n/a"/> N/A</label>
      </div>
    </div>
    <div>
      <label htmlFor="height">height</label>
      <Field name="height" component="input" type="text"/>
    </div>
    <div>
      <label htmlFor="mass">mass</label>
      <Field name="mass" component="input" type="text"/>
    </div>
    <div>
      <label htmlFor="hair_color">Hair Color</label>
      <Field name="hair_color" component="input" type="text"/>
    </div>
    <div>
      <label htmlFor="skin_color">skin_color</label>
      <Field name="skin_color" component="input" type="text"/>
    </div>
    <div>
      <label htmlFor="eye_color">eye_color</label>
      <Field name="eye_color" component="input" type="text"/>
    </div>
    <div>
      <label htmlFor="birth_year">birth_year</label>
      <Field name="birth_year" component="input" type="text"/>
    </div>
    <button type="submit">{addMode? 'Create' : 'Save' }</button>
    { onCancelClick && <Button type="button" onClick={onCancelClick}>Cancel</Button> }
  </form>
)

export const PeopleFormFactory = (uniqueName: string) => reduxForm({
  form: uniqueName
})(PeopleForm)


export default PeopleFormFactory('PeopleForm')
