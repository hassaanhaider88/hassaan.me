// eslint-disable-next-line no-unused-vars
import React from 'react'
import HomePage from './HomePage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectsPage from './ProjectsPage';
const App = () => {
  return (
<section className='w-full open-sans'>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
</section>
  )
}

export default App