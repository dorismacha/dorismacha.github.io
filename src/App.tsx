import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import Publications from './pages/Publications';
import Publication from './pages/Publication';
import NotFound from './pages/NotFound';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/publications/:slug" element={<Publication />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;