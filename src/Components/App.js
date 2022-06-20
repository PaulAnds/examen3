import React from 'react';
import './App.css';
import Content from '../shared/layout/Content';
import Navbar from './Navbar/Navbar';
import {element} from 'prop-types';


function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Content >
        {props.children}
      </Content>
    </div>
  );

}

App.propTypes = {
  children: element.isRequired,
}

export default App;
