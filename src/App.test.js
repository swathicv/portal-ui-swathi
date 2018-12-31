import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';


it('renders without crashing', () => {
 const wrapper= shallow(<App />);
 const result=<h1>header</h1>;
 expect(wrapper.contains(result)).toEqual(true);
});
