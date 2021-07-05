import React from 'react';
import * as redux from "react-redux";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-17-updated';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk'

import { initialState } from '../../reducers/reducers'

import CreateRecipe from './CreateRecipe';
import RecipeForm from './RecipeForm/RecipeForm';

configure({adapter: new Adapter()});

describe('CreateRecipe comoponent: ',() => {
    let useDispatch, useDispatchSpy, useSelector, useSelectorSpy, useState, useStateSpy, store;

    beforeEach(() => {
        const middlewares = [thunk]
        const mockStore = configureStore(middlewares);    
        store = mockStore(initialState);
        useDispatch = jest.fn();
        useDispatchSpy = jest.spyOn(redux, 'useDispatch');
        useDispatchSpy.mockImplementation((init) => [init, useDispatch]);

        useSelector = jest.fn();
        useSelectorSpy = jest.spyOn(redux, 'useSelector');
        useSelectorSpy.mockImplementation((init) => [init, useSelector]);

        useState = jest.fn();
        useStateSpy = jest.spyOn(React, 'useState')
        useStateSpy.mockImplementation((init) => [init, useState]);
    })

    describe('Should', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<CreateRecipe store={store} />);
        })
        it('renderize a component named <RecipeForm>', () => {
            expect(wrapper.find('RecipeForm')).toHaveLength(1)
        })
    })

    describe('The <RecipeForm> should', () => {
        let wrapper;
        beforeEach(() => {
            wrapper = shallow(<RecipeForm store={store} />);
        })
        it('contain a form tag', () => {
            expect(wrapper.find('form')).toHaveLength(1)
        })
        it('contain a input with property name equal to title', () => {
            expect(wrapper.find('input[name="title"]')).toHaveLength(1)
        })
        it('contain a textarea with property name equal to summary', () => {
            expect(wrapper.find('textarea[name="summary"]')).toHaveLength(1)
        })
        it('contain a textarea with property name equal to summary', () => {
            expect(wrapper.find('textarea[name="instructions"]')).toHaveLength(1)
        })
        it('contain a image with the property name equal to spoonacularScore50', () => {
            expect(wrapper.find('img[name="spoonacularScore50"]')).toHaveLength(1)
        })
        it('contain a image with the property name equal to healthScore10', () => {
            expect(wrapper.find('img[name="healthScore10"]')).toHaveLength(1)
        })
        it('contain a Selector with the property name equal to formSelect', () => {
            expect(wrapper.find('input[name="image"]')).toHaveLength(1)
        })
        it('contain a Selector with the property name equal to formSelect', () => {
            expect(wrapper.find('select[name="formSelect"]')).toHaveLength(1)
        })
        it('contain a label with type submit', () => {
            expect(wrapper.find('input[type="submit"]')).toHaveLength(1)
          })
    })

    describe('The <RecipeForm> should', () => {
        let wrapper, emptyForm;
        beforeEach(() => {
            wrapper = shallow(<RecipeForm store={store} />);
        })
        it('change its state title when something is written in the input title', () => {
            wrapper.find('input[name="title"]').simulate('change', {target: {name: 'title', value: 'Double Beef Burguer'}});
            expect(useState).toHaveBeenCalledWith({"title": "Double Beef Burguer", "summary": '', "instructions": '', "spoonacularScore": '', "healthScore": '', "image": '', "types": []});
        })
        it('change its state summary when something is written in the textarea summary', () => {
            wrapper.find('textarea[name="summary"]').simulate('change', {target: {name: 'summary', value: 'A new summary for the recipe'}});
            expect(useState).toHaveBeenCalledWith({"title": "", "summary": 'A new summary for the recipe', "instructions": '', "spoonacularScore": '', "healthScore": '', "image": '', "types": []});
        })
        it('change its state instructions when something is written in the textarea instructions', () => {
            wrapper.find('textarea[name="instructions"]').simulate('change', {target: {name: 'instructions', value: 'New instructions for the recipe'}});
            expect(useState).toHaveBeenCalledWith({"title": "", "summary": '', "instructions": 'New instructions for the recipe', "spoonacularScore": '', "healthScore": '', "image": '', "types": []});
        })
        it('change its spoonacularScore state value when a fire icon is clicked', () => {
            wrapper.find('img[name="spoonacularScore10"]').simulate('click');
            expect(useState).toHaveBeenCalledWith({"title": "", "summary": '', "instructions": '', "spoonacularScore": 10 , "healthScore": '', "image": '', "types": []});
        })
        it('change its healthScore state value when a fire icon is clicked', () => {
            wrapper.find('img[name="healthScore50"]').simulate('click');
            expect(useState).toHaveBeenCalledWith({"title": "", "summary": '', "instructions": '', "spoonacularScore": "" , "healthScore": 50, "image": '', "types": []});
        })
        it('change its image state value instructions when something is written in the input image', () => {
            wrapper.find('input[name="image"]').simulate('change', {target: {name: 'image', value: 'URLImage'}});
            expect(useState).toHaveBeenCalledWith({"title": "", "summary": '', "instructions": '', "spoonacularScore": "" , "healthScore": '', "image": 'URLImage', "types": []});
        })

        it('change its imagePrevie state value instructions when something is written in the input image and the button is clicked', () => {
            wrapper.find('input[name="image"]').simulate('change', {target: {name: 'image', value: 'URLImage'}});
            wrapper.find('img[name="ImagePreviewButton"]').simulate('click');
            expect(useState).toHaveBeenCalledWith({"title": "", "summary": '', "instructions": '', "spoonacularScore": "" , "healthScore": '', "image": 'URLImage', "types": []});
            expect(useState).toHaveBeenCalledWith({"imagePreview": ''});
        })

        it('change its types state value when an option is selected', () => {
            wrapper.find('select[name="formSelect"]').simulate('change', {target: {value: 'Gluten free'}});
            expect(useState).toHaveBeenCalledWith({"title": "", "summary": '', "instructions": '', "spoonacularScore": "" , "healthScore": '', "image": '', "types": ['gluten free']});
        })
        
        it('delete a selection of types when an option is selected for second time', () => {
            wrapper.find('select[name="formSelect"]').simulate('change', {target: {value: 'Gluten free'}});
            wrapper.find('select[name="formSelect"]').simulate('change', {target: {value: 'Dairy free'}});
            wrapper.find('select[name="formSelect"]').simulate('change', {target: {value: 'Gluten free'}});
            expect(useState).toHaveBeenCalledWith({"title": "", "summary": '', "instructions": '', "spoonacularScore": "" , "healthScore": '', "image": '', "types": ['dairy free']});
        })

        it('deberia llamar al evento `preventDefault()` para evitar que se refresque la pagina al hacer un submit', () => {
            const event = { preventDefault: () => {} }
            jest.spyOn(event, 'preventDefault')
            wrapper.find('form').simulate('submit', event)
            expect(event.preventDefault).toBeCalled()
          })
        
    })
});
