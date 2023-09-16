// import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Route, Routes} from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import DetailPage from './pages/DetailPage'
import ErrorPage from './pages/ErrorPage'

// const router = createBrowserRouter(
//   createRoutesFromElements(
//   <Routes path='/' errorElement={<ErrorPage />} >
//   <Route index element={<Homepage />} />
//   <Route path='movies:movieId' element={<DetailPage />} />
// </Routes>
//   )
// )
function App() {
  
  return (
    <>
      {/* <RouterProvider router={router} /> */}
     
        <Routes>
          <Route path='/moviebox' element={<Homepage />} />
          <Route path='moviebox/movies/:id' element={<DetailPage />} />
          <Route path='*' errorElement={<ErrorPage />} />
        </Routes>
    
    </>
  )
}

export default App
