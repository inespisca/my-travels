import React from 'react';
import './App.css';
import Travel from './Travel';
import Travel2 from './Travel2';
import Travel3 from './Travel3';
import Travel4 from './Travel4';

const App = () => {
    return (
      <><p><Travel></Travel>: Paris</p>
      <p><Travel2></Travel2>: France</p>
      <p><Travel3></Travel3>: <img src="https://cdn.pixabay.com/photo/2019/07/21/16/29/paris-4353082_960_720.jpg"/></p>
      <p><Travel4></Travel4>: 1605km</p>
      <p><Travel></Travel>: Mainz</p>
      <p><Travel2></Travel2>: Germany</p>
      <p><Travel3></Travel3>: <img src="https://cdn.pixabay.com/photo/2018/04/03/01/38/frankfurt-mainz-3285698_960_720.jpg"/></p>
      <p><Travel4></Travel4>: 2265km</p></>
    )
  };

export default App;