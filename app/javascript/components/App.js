import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
//shared
import Navigation from "./Shared/Navigation"
//pages
import Dashboard from "./Pages/Dashboard"
import Landing from "./Pages/Landing"
import NewApplication from "./Pages/NewApplication"
import EditApplication from "./Pages/EditApplication"
import DeleteApplication from "./Pages/DeleteApplication"
import About from "./Pages/About"

class App extends React.Component {
  render () {
    const { 
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user,
      sign_up_route,
      csrf_token
    } = this.props
    return (
      <React.Fragment>
        <Navigation logged_in={ logged_in } sign_in_route = { sign_in_route } sign_out_route={ sign_out_route }/>
        <Router>
          <Switch>
            <Route exact path="/" render={(props) => <Landing {...props} logged_in={ logged_in } sign_up_route={ sign_up_route }/> }/>
            <Route path="/dash" component={ Dashboard }/>
            <Route path="/new" render={(props) => <NewApplication {...props} current_user={ current_user } csrf_token={ csrf_token }/> }/>
            <Route path="/edit/:id" render={(props) => <EditApplication {...props} csrf_token={ csrf_token }/> }/>
            <Route path="/delete/:id" render= {(props) => <DeleteApplication {...props} csrf_token={ csrf_token }/> }/>
            <Route path="/about" component={ About }/>
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App
