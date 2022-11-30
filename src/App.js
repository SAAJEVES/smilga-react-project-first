import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import pages
import Home from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Error from './pages/Error';
// import components
import Navbar from './components/Navbar';
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path='/'  element={<Home />}/>
        <Route path='about' element={<About />} />
        {/* <Route path='cocktail/:id' element={<SingleCocktail />} /> */}
        <Route path='cocktail'>
          <Route path=':id' element={<SingleCocktail />}/>
        </Route>
        <Route path='*' element={<Error />}/>
      </Routes>
    </React.Fragment>
  )
}

export default App
