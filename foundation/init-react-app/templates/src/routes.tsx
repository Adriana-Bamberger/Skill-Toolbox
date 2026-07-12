import { Routes, Route } from 'react-router'
import App from './App'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      {/* Add future routes here: <Route path="/dashboard" element={<Dashboard />} /> */}
    </Routes>
  )
}