import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(){
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path="/projects/:id" element={<ProjectDetail />} /> */}
        </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App