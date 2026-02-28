import React from 'react';
import { Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed -translate-x-1/2 flex shadow-black/50 transition-all duration-300 hover:border-white/20 hover:shadow-brand-sky/5 bg-gradient-to-br from-white/10 to-white/0 w-fit max-w-[90vw] z-50 rounded-full ring-white/10 ring-1 pt-1.5 pr-1.5 pb-1.5 pl-4 top-6 left-1/2 shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] backdrop-blur-xl items-center justify-between">
      
      {/* Logo Area */}
      <Link to="/" className="flex gap-2.5 items-center mr-8">
        <div className="relative flex items-center justify-center">
           {/* Subtle glow behind logo */}
           <Layers className="w-6 h-6 text-primary" />
        </div>
        <span className="font-sans font-medium text-base tracking-tight text-white">Aura</span>
      </Link>

      {/* Links (Hidden on small screens) */}
      <div className="hidden md:flex items-center gap-6 mr-8">
        <Link to="/philosophy" className="text-xs font-medium text-white/50 hover:text-white transition-colors">Philosophy</Link>
        <Link to="/ecosystem" className="text-xs font-medium text-white/50 hover:text-white transition-colors">Ecosystem</Link>
        <Link to="/rates" className="text-xs font-medium text-white/50 hover:text-white transition-colors">Rates</Link>
        <Link to="/blog" className="text-xs font-medium text-white/50 hover:text-white transition-colors">Blog</Link>
      </div>

      {/* Action Button */}
      <Button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-primary transition-colors group border-none h-auto">
        Start Engine
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" viewBox="0 0 24 24" className="group-hover:translate-x-0.5 transition-transform"><path fill="currentColor" d="M13.25 12.75V18a.75.75 0 0 0 1.28.53l6-6a.75.75 0 0 0 0-1.06l-6-6a.75.75 0 0 0-1.28.53z"></path></svg>
      </Button>
    </nav>
  );
}
