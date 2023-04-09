
import React, { useEffect, useState } from 'react';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Header from './components/Header/Header';

const App = () => {

  return (
    <div>
     <Header></Header>
     <Button>
      Short By Date
     </Button>
    <Card></Card>
    </div>
  );
};

export default App;