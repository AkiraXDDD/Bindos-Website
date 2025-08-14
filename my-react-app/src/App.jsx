import { useState } from 'react';
import LoginPage from "./LoginPage";
import AlertComponent from './AlertComponent';
import HelpComponent from './HelpComponent';
import { Navigate } from 'react-router-dom';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    if (password && username) {
      setIsLoggedIn(true);
    } else {
      setShowAlert(true);
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <Navigate to='/profile' replace />
      ) : (
        <LoginPage
          password={password}
          setPassword={setPassword}
          username={username}
          setUsername={setUsername}
          onLogin={handleLogin}
          onHelp={() => setShowHelp(!showHelp)}
        />
      )}

      {showAlert && <AlertComponent onClose={() => setShowAlert(false)}/>}
      {showHelp && <HelpComponent onClose={() => setShowHelp(false)}/>}
    </>
  );
}

export default App;

