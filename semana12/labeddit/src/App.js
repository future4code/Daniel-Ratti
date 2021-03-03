import React, { useState } from 'react';
import Router from './Router/Router';
import LoggedContext from './Context/LoggedContext'

const App = () => {
  const [logged, setLogged] = useState(localStorage.getItem("token") ? true : false)

  return (
    <LoggedContext.Provider value={{logged, setLogged}}>
      <Router />
    </LoggedContext.Provider>
  )
}

export default App;
