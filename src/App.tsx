import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import Research from './pages/research/index';
import VewResearch from './pages/research/Research';
import NotFound from './pages/NotFound';
import CurriculumVitae from './pages/CurriculumVitae';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/research/:slug" element={<VewResearch />} />
          <Route path="/curriculum-vitae" element={<CurriculumVitae />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;