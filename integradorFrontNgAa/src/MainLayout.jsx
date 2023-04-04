import { useState } from 'react'
import './App.css'
import Contact from './Routes/Contact'

function MainLayout() {
  const [ count, setCount ] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={home.path} element={<Home />} />
        <Route path={contact.path} element={<Contact />} />
        <Route path={favs.path} element={<Favs />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default MainLayout;
