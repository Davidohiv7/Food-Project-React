import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';

import { initialState } from './reducers/reducers'

import App from './App';
import LandingPage from './components/Landing Page/LandingPage'
import Home from './components/Home/Home'
import NavBar from './components/Navigation Bar/NavBar'
import CreateRecipe from './components/CreateRecipe/CreateRecipe'
import RecipeDetailCard from './components/Home/RecipeDetailsCard/RecipeDetailsCard'

configure({adapter: new Adapter()});

describe('App', () => {
  let store
  const middlewares = [thunk]
  const mockStore = configureStore(middlewares);

  beforeEach(() => {
    store = mockStore(initialState);
  });

  describe('The food app ', () => {
    it("should only render LandingPage at '/'", () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
        expect(wrapper.find(LandingPage)).toHaveLength(1);
        expect(wrapper.find(NavBar)).toHaveLength(0);
        expect(wrapper.find(Home)).toHaveLength(0);
        expect(wrapper.find(CreateRecipe)).toHaveLength(0);
    });

    it('should render only NavBar and Home components in route "/home"', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/home' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
      expect(wrapper.find(LandingPage)).toHaveLength(0);
      expect(wrapper.find(NavBar)).toHaveLength(1);
      expect(wrapper.find(Home)).toHaveLength(1);
      expect(wrapper.find(CreateRecipe)).toHaveLength(0);
    });

    it('should render only NavBar and CreateRecipe components in route "/createRecipe"', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/createRecipe' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
      expect(wrapper.find(LandingPage)).toHaveLength(0);
      expect(wrapper.find(NavBar)).toHaveLength(1);
      expect(wrapper.find(Home)).toHaveLength(0);
      expect(wrapper.find(CreateRecipe)).toHaveLength(1);
    });

    it('should render NavBar, Home and RecipeDetailCard component in route "/home/recipe/:id"', () => {
      const wrapper = mount(
          <Provider store={store}>
            <MemoryRouter initialEntries={[ '/home/recipe/:id' ]}>
              <App />
            </MemoryRouter>
          </Provider>
      );
      expect(wrapper.find(RecipeDetailCard)).toHaveLength(1);
      expect(wrapper.find(NavBar)).toHaveLength(1);
      expect(wrapper.find(Home)).toHaveLength(1);
    });

  });

});
