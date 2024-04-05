import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavigationBar from './custom-components/NavigationBar'
import Home from './pages/Home'
import About from './pages/About'
import Work from './pages/Work'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import SinglePageView from './pages/SinglePageView'

function App() {
  return (
    // <BrowserRouter>
    //   <div className="w-full h-screen flex flex-col items-center">
    //     <NavigationBar/>
    //     <div className="px-4 max-w-[960px] flex items-center justify-center">
    //       <Routes>
    //         <Route path="/" element={<Home />}/>
    //         <Route path="/about" element={<About/>}/>
    //         <Route path="/work" element={<Work/>}/>
    //         <Route path="/experience" element={<Experience/>}/>
    //         <Route path="/contact" element={<Contact/>}/>
    //         <Route path="*" element={<NotFound />} />
    //       </Routes>
    //     </div>
    //   </div>
    // </BrowserRouter>
    <SinglePageView />
  )
}

export default App
