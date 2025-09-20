
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <div className='min-h-screen flex flex-col '>
      <Header />

       <Routes>
        <Route path='/' element={<Home />}/>
       </Routes>

       <Footer />
      </div>

    </>
  )
}

export default App
