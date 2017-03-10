import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Videos from './components/Videos';
import NotFound from './components/NotFound';

export default (
 <Route>
   <Route path="/" component={App}>
    <IndexRoute component={Videos} />
  </Route>

   <Route path="*" component={NotFound} />
 </Route>
)
