import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FeedPage from '../Screens/FeedPage'
import LoginPage from '../Screens/LoginPage'
import PostPage from '../Screens/PostPage'
import SignUpPage from '../Screens/SignUpPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login">
                    <LoginPage />
                </Route>
                <Route exact path="/signup">
                    <SignUpPage />
                </Route>
                <Route exact path="/Feed">
                    <FeedPage />
                </Route>
                <Route exact path="/post/:postId">
                    <PostPage />
                </Route>
                <Route>
                    <p>ERRO</p>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router