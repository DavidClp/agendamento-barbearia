import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import {Header, Footer, BtnWhatsApp} from './components'
import {Home, Scheduling} from './pages'

function App() {
  return (
      <BrowserRouter basename='/barbearia'>
        {/* Cabeçalho */}
        <Header/>

      <main>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/scheduling' element={<Scheduling/>}/>
        </Routes>

      </main>

      <BtnWhatsApp/>

      <Footer/>

      </BrowserRouter>
  );
}

export default App;
