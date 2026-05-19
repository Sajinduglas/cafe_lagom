import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './Layout';
import Home from '@pages/Home/Home';
import Menu from '@pages/Menu/Menu';
import About from '@pages/About/About';
import Gallery from '@pages/Gallery/Gallery';
import Reviews from '@pages/Reviews/Reviews';

export default function App() {
  return (
    <BrowserRouter>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="menu" element={<Menu />} />
            <Route path="about" element={<About />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  );
}
