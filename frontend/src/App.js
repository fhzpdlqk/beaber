
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Main2021 from './component/2021/main/Main2021'
import Main from './component/main/Main'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Main/>} ></Route>
            <Route path="/2021" element={<Main2021/>} ></Route>
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
