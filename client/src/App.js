import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import LandingPage from './components/Landing Page/LandingPage.jsx'
import NavBar from './components/Navigation Bar/NavBar.jsx'
import Home from './components/Home/Home.jsx'
import RecipeDetailCard from './components/Home/RecipeDetailsCard/RecipeDetailsCard.jsx'
import CreateRecipe from './components/CreateRecipe/CreateRecipe.jsx'

function App() {
  return (
      <div className="App">
        <Route
          exact path='/'
          component={LandingPage}
        />
        <Route
          path={[ '/home', '/createRecipe', '/recipes', '/signUp' ]}
          component={NavBar}
        />
        <Route
          exact path={'/home'}
          component={Home}
        />
        <Route
          path={'/home/:parameters'}
          component={Home}
        />
        <Route 
        path='/home/:parameters/:id' 
        component={RecipeDetailCard} 
        />
        <Route 
        path='/createRecipe' 
        component={CreateRecipe} 
        />
      </div>
  );
}

export default App;
