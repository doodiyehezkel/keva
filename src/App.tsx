import { createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import './App.css'
import RootLayout from './layout/RootLayout'
import HomePage from './pages/home/HomePage'
import WhoAreWePage from './pages/who-are-we/WhoAreWePage'


const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomePage />} />
      <Route path='who-are-we' element={<WhoAreWePage />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
