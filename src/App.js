import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Item from './components/Item';
import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import LogOut from './components/LogOut';
import ChatWidget from './components/ChatWidget';
import LoginRedirect from './components/LogInRedirect';

function App() {
  return (
    <>
        <Router>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/item/:itemId" element={<Item />} />
              <Route path="/about" element={<About />} />
              <Route path="/user/logIn" element={<LogIn />} />
              <Route path="/user/signUp" element={<SignUp />} />
              <Route path="/user/logOut" element={<LogOut />} />
              <Route path="/login/success" element={<LoginRedirect />} />

            </Routes>
            <ChatWidget/>
          <Footer/>
        </Router>
    </>
  );
}

export default App;
