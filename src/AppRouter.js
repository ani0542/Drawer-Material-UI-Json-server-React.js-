import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Layout from './Components/Layout'


function AppRouter() {
    return (
        <>
                 <Router>
                        <Layout>
                                <Switch>
                                    <Route exact path="/" component={Notes}/>
                                    <Route path="/create" component={Create}/>
                                </Switch>
                        </Layout>
                 </Router>
        </>
    )
}

export default AppRouter
