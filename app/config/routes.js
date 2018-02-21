import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'; 
import { MainContainer, HomeContainer, AuthenticateContainer, FeedContainer, LogoutContainer } from 'containers'

export default function getRoutes (checkAuth) {
  return (
    <Router>
      <MainContainer>
          <Route exact={true} path='/' component={checkAuth(HomeContainer)} />
          <Route path='/auth' component={checkAuth(AuthenticateContainer)} />
          <Route path='/feed' component={checkAuth(FeedContainer)} />
          <Route path="/logout" component={LogoutContainer} />
      </MainContainer>
    </Router>
  )
}