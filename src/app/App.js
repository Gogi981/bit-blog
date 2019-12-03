import React from 'react';
import Header from '../components/Header'


const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-1"></div>
        <div className="col-10">
          <Header />
        </div>
        <div className="col-1"></div>
      </div>
    </div>
  );
}

export default App;
