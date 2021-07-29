import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Node from './Node/Node'
import Express from './Express/Express'
import Home from './Home/Home'

const Server = () => {
  return (
    <>
      <Switch>
        <Route path="/node" exact>
          <Node />
        </Route>
        <Route path="/express" exact>
          <Express />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default Server
