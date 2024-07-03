// src/App.tsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Jobs from './Jobs';
import JobDetails from './JobDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/jobs/:slug" element={<JobDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
