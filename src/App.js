import React from 'react';
import './App.css';
import Travel from './Travel';

const App = () => {
    return (
      <>
        <Travel
          destination="Paris"
          country="France"      
          distance="1605km"
          photo="https://cdn.pixabay.com/photo/2019/07/21/16/29/paris-4353082_960_720.jpg"/>
        <Travel
          destination="Mainz"
          country="Germany"      
          photo="https://cdn.pixabay.com/photo/2018/04/03/01/38/frankfurt-mainz-3285698_960_720.jpg"
          distance="2265km"/> 
      </>
    )
  };

export default App;