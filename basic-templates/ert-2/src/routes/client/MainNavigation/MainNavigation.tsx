import React from 'react'
import { Switch, Route, Link } from 'react-router-dom'

const MainNavigation: React.FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route path="/contact">
          <Link to="/">
            <h1> Home </h1>
          </Link>
        </Route>
        <Route path="/about">
          <Link to="/contact">
            <h1> Contact </h1>
          </Link>
        </Route>
        <Route path="/" exact>
          <Link to="/about">
            <h1> About </h1>
          </Link>
        </Route>
      </Switch>
    </>
  )
}

export default MainNavigation
