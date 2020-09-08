import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
//shared
import Navigation from "./Shared/Navigation"
//components
import Dashboard from "./Pages/Dashboard"
import Landing from "./Pages/Landing"
import NewApplication from "./Pages/NewApplication"
class App extends React.Component {
  render () {
    const { 
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <React.Fragment>
        <Navigation logged_in={ logged_in } sign_in_route = { sign_in_route } sign_out_route={ sign_out_route } />
        <Router>
          <Switch>
            <Route exact path="/" component={ Landing }/>
            <Route path="/dash" component= { Dashboard }/>
            <Route path="/new" component={ NewApplication }/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App
