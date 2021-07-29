import React from 'react'
import { Switch, Route } from 'react-router-dom'

const ExpressNav: React.FC = (): JSX.Element => {
  return (
    <>
      <Switch>
        <Route path="/node" exact>
          Node Js
        </Route>
        <Route path="/node/createSimpleApi" exact>
          Simple
        </Route>
        <Route path="/node/createComplexApi" exact>
          Complex
        </Route>
      </Switch>
    </>
  )
}

export default ExpressNav
