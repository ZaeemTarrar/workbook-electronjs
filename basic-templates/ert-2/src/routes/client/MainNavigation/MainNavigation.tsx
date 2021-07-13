import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import Home from '../../../pages/client/Home/Home'

const MainNavigation: React.FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default MainNavigation
