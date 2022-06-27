import React, { createContext, Dispatch, SetStateAction, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import DashboardContainer from './components/Containers/DashboardContainer';
import { DashboardName } from './types/enums';
import { CurrentDashContext } from './contexts/ViewContexts';

function App() {

  const [currentDash, setCurrentDash] = useState<DashboardName>(DashboardName.Home);


  return (
    <div className="App">
      <CurrentDashContext.Provider value={{currentDash: currentDash, setCurrentDash: setCurrentDash}}>
        <NavBar></NavBar>
        <DashboardContainer></DashboardContainer>
     </CurrentDashContext.Provider>
    </div>
  );
}

export default App;
