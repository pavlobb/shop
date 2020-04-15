import React from 'react';
import './App.css';
//Redux
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Mockup from './layout/Mockup';

function App() {
  return (
    <div className="App">
      <Provider store={store}> 
    <Router>             
        <Mockup />
    </Router>       
      </Provider>
     
    </div>
  );
}

export default App;
