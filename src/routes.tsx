import Homepage from './pages/homepage'
import { Routes, Route } from 'react-router-dom'

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
    </Routes>
  )
}

export default Router
