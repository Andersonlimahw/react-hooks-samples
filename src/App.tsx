import logo from './logo.svg'
import './App.css'
import { UseStateSample } from './hooks/useStateSample/index';
import { UseEffectSample } from './hooks/useEffectSample';
import { UseContextSample } from './hooks/useContextSample';
import { useState } from 'react';
import { UserProvider } from './contexts/UserContext';
import { UseReducerSample } from './hooks/useReducerSample';
import { UseCallBackSample } from './hooks/useCallBackSample';
import { UseMemoSample } from './hooks/useMemoSample';
import { UseRefSample } from './hooks/useRefSample';
import { UseImperativeHandleSample } from './hooks/useImperativeHandleSample';

const defaultUserData =  {
  name: 'Anderson Lima',
  email: 'sample@sample.com', 
}


function App() {
  const [userData, setUserData] = useState<any>(defaultUserData);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
      </header>
      <main className='app_main'>
        <UseStateSample /> 
        <UseEffectSample />       

        <UserProvider value={{
          userData,
          setUserData
        }}>
          <UseContextSample />
        </UserProvider>

        <UseReducerSample />
        <UseCallBackSample />
        <UseMemoSample />
        <UseRefSample />
        <UseImperativeHandleSample />
      </main>
    </div>
  )
}

export default App
