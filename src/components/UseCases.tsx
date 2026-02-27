import React, { useRef } from 'react';
import { TrendingUp, RefreshCw, Briefcase, Zap, Shield, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`spotlight-card group relative flex flex-col p-10 rounded-[32px] border border-white/10 bg-white/[0.02] overflow-hidden transition-all duration-500 ${className}`}
    >
      {/* Spotlight Background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.06), transparent 40%)' }}
      ></div>
      {/* Spotlight Border */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[32px] border border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ 
            maskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)',
            WebkitMaskImage: 'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), black, transparent)'
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {children}
    </div>
  );
}

export function UseCases() {
  return (
    <section className="flex flex-col overflow-hidden lg:px-12 z-10 bg-black/80 w-full border-white/5 border-t pt-32 pr-6 pb-40 pl-6 relative backdrop-blur-3xl items-center">
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-3xl mb-24 relative z-10">
        <div className="flex items-center gap-3 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs font-mono text-primary uppercase tracking-[0.2em] font-medium">Use Cases</span>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium tracking-tight text-white mb-8">
          Built for <span className="text-white/60">AI infrastructure teams</span>
        </h2>

        <p className="text-xl text-white/60 leading-relaxed max-w-2xl font-light tracking-tight">
          Building production agentic systems with the world's most secure delegation layer.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 z-10 w-full max-w-7xl relative">
        <TradingAgentsCard />
        <DeFiAutomationCard />
        <TreasuryManagementCard />
      </div>
    </section>
  );
}

function TradingAgentsCard() {
  return (
    <SpotlightCard>
      <div className="flex items-center gap-3 mb-4">
        <TrendingUp className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-semibold tracking-tight text-white">AI Trading Agents</h3>
      </div>
      <p className="text-base text-white/50 leading-relaxed mb-12 font-light">
        Deploy autonomous trading agents with strict spending limits and risk parameters enforced at the wallet layer.
      </p>

      {/* Visual: Trading Chart/Execution */}
      <div className="mt-auto relative w-full h-64 rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden p-6 flex flex-col group/visual">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
            <span className="text-[10px] font-mono text-white/30 uppercase tracking-widest">LIVE_EXECUTION</span>
          </div>
          <span className="text-[10px] font-mono text-primary uppercase tracking-widest">BTC/USDC</span>
        </div>

        <div className="flex-1 flex items-end gap-1 px-2">
          {[40, 65, 45, 80, 55, 90, 70, 85, 60, 100].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`flex-1 rounded-t-sm ${i === 9 ? 'bg-primary shadow-[0_0_15px_rgba(56,189,248,0.5)]' : 'bg-white/10'}`}
            />
          ))}
        </div>
        
        <div className="mt-4 flex justify-between items-center bg-white/5 rounded-xl p-3 border border-white/5 group-hover/visual:border-primary/20 transition-colors">
          <div className="flex flex-col">
            <span className="text-[8px] text-white/30 uppercase">Buy Order</span>
            <span className="text-xs text-white font-medium">0.42 BTC</span>
          </div>
          <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center">
            <ArrowUpRight className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

function DeFiAutomationCard() {
  return (
    <SpotlightCard>
      <div className="flex items-center gap-3 mb-4">
        <RefreshCw className="w-6 h-6 text-primary animate-spin-slow" />
        <h3 className="text-2xl font-semibold tracking-tight text-white">DeFi Protocol Automation</h3>
      </div>
      <p className="text-base text-white/50 leading-relaxed mb-12 font-light">
        Automate liquidity management, yield farming, and rebalancing with policy-controlled agent wallets.
      </p>

      {/* Visual: Circular Flow */}
      <div className="mt-auto relative w-full h-64 rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 grid-bg opacity-10"></div>
        
        {/* Orbiting Particles */}
        <div className="relative w-32 h-32 flex items-center justify-center">
          <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-primary rounded-full blur-[2px]"></div>
          </div>
          <div className="absolute inset-4 border border-white/5 rounded-full animate-spin-slow-reverse">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white/40 rounded-full"></div>
          </div>
          
          {/* Central Icon */}
          <div className="z-10 bg-black/50 backdrop-blur-xl border border-white/10 rounded-2xl p-4">
            <Zap className="w-6 h-6 text-primary" />
          </div>

          {/* Policy Badges */}
          <div className="absolute -top-12 -left-12 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md text-[8px] text-white/60 font-mono flex items-center gap-2 group-hover:border-primary/30 transition-colors">
            <Shield className="w-3 h-3 text-primary" /> MAX_SLIPPAGE: 0.5%
          </div>
          <div className="absolute -bottom-8 -right-8 px-3 py-1.5 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md text-[8px] text-white/60 font-mono flex items-center gap-2 group-hover:border-primary/30 transition-colors">
            <RefreshCw className="w-3 h-3 text-primary" /> REBALANCE: ACTIVE
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}

function TreasuryManagementCard() {
  return (
    <SpotlightCard>
      <div className="flex items-center gap-3 mb-4">
        <Briefcase className="w-6 h-6 text-primary" />
        <h3 className="text-2xl font-semibold tracking-tight text-white">Treasury Management</h3>
      </div>
      <p className="text-base text-white/50 leading-relaxed mb-12 font-light">
        Enable AI-powered treasury operations with multi-sig-style policies and threshold signing for large organizations.
      </p>

      {/* Visual: Multi-node Authorization */}
      <div className="mt-auto relative w-full h-64 rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden p-8 flex flex-col items-center justify-center gap-8">
        <div className="flex gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="relative group/node">
              <div className="w-12 h-12 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center transition-all duration-500 group-hover/node:border-primary/40">
                <Shield className={`w-5 h-5 ${i < 3 ? 'text-primary' : 'text-white/20'}`} />
              </div>
              <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-black ${i < 3 ? 'bg-green-500' : 'bg-white/10'}`}></div>
            </div>
          ))}
        </div>
        
        {/* Transaction Status */}
        <div className="w-full bg-white/[0.03] border border-white/10 rounded-2xl p-4 flex flex-col gap-3 group-hover:border-primary/20 transition-colors">
          <div className="flex justify-between items-center text-[8px] font-mono uppercase tracking-widest">
            <span className="text-white/30">Auth Status</span>
            <span className="text-primary font-bold">2/3 Approved</span>
          </div>
          <div className="h-1.5 w-full bg-black rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '66%' }}
              className="h-full bg-primary"
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-[10px] text-white/80 font-light">Execute $2.5M USDT Transfer</span>
            <div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center animate-pulse">
              <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
