// @flow

import React from 'react'
import { Route } from 'react-router-dom'
import PeopleContainer from './people/PeopleContainer'
import './App.css'
import {
  RootContent,
  AppHeader,
  ContentContainer,
  Title,
} from './kit/Layout'


const App = () => (
  <RootContent>
    <AppHeader>
      <Title>Star Wars - API</Title>
    </AppHeader>
    <ContentContainer>
    <Route exact path="/" component={PeopleContainer} />
    </ContentContainer>
  </RootContent>
)

export default App
