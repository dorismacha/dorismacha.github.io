import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import Researches from './pages/Researches';
import Research from './pages/Research';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/researches" element={<Researches />} />
          <Route path="/researches/:slug" element={<Research />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;