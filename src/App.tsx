import './App.css'
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
