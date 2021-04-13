
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Intro from './pages/Intro';
import Solitaire from './pages/Solitaire';
import Error404 from  './pages/Error404';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Intro}/>
                <Route path='/game' component={Solitaire}/>

                <Route path='*' component={Error404}/>
            </Switch>
        </BrowserRouter> 
    )
};