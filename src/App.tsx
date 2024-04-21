import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import SinglePageView from './pages/SinglePageView'
import NotFound from './pages/NotFound'
import ProjectInfo from './pages/ProjectInfo'
import { useEffect } from 'react'

function App() {

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <div className="w-full h-screen flex flex-col items-center">
        <div className="px-4 max-w-[960px] flex items-center justify-center">
          <Routes>
            <Route path="/" element={<SinglePageView />}/>
            <Route path="/projects/:projectId" element={<ProjectInfo />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  )
}

export default App
