import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ReviewDetails from './components/ReviewDetails/ReviewDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/home' element={<Home></Home>} />
        <Route path='/reviewDetails' element={<ReviewDetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
