import React, { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Hijo from './components/hijo';
import { UserProvider } from './providers/UserProvider';

function App() {

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <UserProvider>
          <Hijo />
        </UserProvider> // Add closing tag for userContext.Provider
      </div>
    </>
  )
}

export default App
