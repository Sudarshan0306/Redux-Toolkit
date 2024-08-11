import './App.css';
// import Counter from './Components/Counter';
import { useSelector } from 'react-redux';
import Login from './Components/Login';
import UserProfile from './Components/UserProfile';
import Header from './Components/Header';
import Counter from './Components/Counter';

function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {isAuth && <UserProfile />}
      {!isAuth && <Login />}
      {isAuth && <Counter />}
    </>
  )
}

export default App
