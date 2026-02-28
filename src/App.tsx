import { Background } from '@/components/Background';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from '@/pages/Home';
import { Philosophy } from '@/pages/Philosophy';
import { Ecosystem } from '@/pages/Ecosystem';
import { Rates } from '@/pages/Rates';
import { Blog } from '@/pages/Blog';
import { BlogPost } from '@/pages/BlogPost';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen relative overflow-x-hidden selection:bg-primary selection:text-black">
        <Background />
        <Navbar />
        
        {/* Main Content */}
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/philosophy" element={<Philosophy />} />
            <Route path="/ecosystem" element={<Ecosystem />} />
            <Route path="/rates" element={<Rates />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
