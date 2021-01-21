import React from 'react';
import './App.css';
import {BaseLayout} from './layouts'
import {Home} from './pages/home'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, useHistory
} from "react-router-dom";
import {MovieDetails} from "./pages";




function App(){
const history = useHistory();
    return (
        <BaseLayout>
            <Switch>
                <Route path='/' exact>
                    <Home/>
                </Route>

                <Route path='/movie/:id' >
                    <MovieDetails/>
                </Route>

                <Route >
                    <h1>PAGE NOT FOUND<button onClick={()=>history.push('/')}>
                        go home</button></h1>
                </Route>


            </Switch>

        </BaseLayout>
    )
}

export default App;