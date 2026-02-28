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
import { MPCWallet } from '@/pages/ecosystem/MPCWallet';
import { ComingSoon } from '@/pages/ecosystem/Placeholder';

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
            <Route path="/ecosystem/mpc-wallet" element={<MPCWallet />} />
            <Route path="/ecosystem/policy-engine" element={<ComingSoon name="Policy Engine" />} />
            <Route path="/ecosystem/delegation" element={<ComingSoon name="Delegation & Session Authority" />} />
            <Route path="/ecosystem/integrations" element={<ComingSoon name="MCP & Integration Layer" />} />
            <Route path="/ecosystem/compliance" element={<ComingSoon name="Compliance & Audit Framework" />} />
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