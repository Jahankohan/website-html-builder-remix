import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const BLOG_POSTS = [
  {
    id: '1',
    title: 'The Future of AI-Driven Banking Protocols',
    excerpt: 'How artificial intelligence is reshaping the way we think about transaction security and automated wealth management in the digital age.',
    author: 'Elena Vance',
    date: 'Feb 24, 2026',
    category: 'Innovation',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    featured: true
  },
  {
    id: '2',
    title: 'Secure Delegation: Protecting Your Digital Assets',
    excerpt: 'Deep dive into our delegation infrastructure and how we ensure your assets remain protected even when handled by automated agents.',
    author: 'Marcus Chen',
    date: 'Feb 20, 2026',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '3',
    title: 'Aura V2.4.0: What You Need to Know',
    excerpt: 'Exploring the latest updates to our secure protocol, including enhanced performance and new agent-to-agent communication features.',
    author: 'Sarah Jenkins',
    date: 'Feb 15, 2026',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1642790103517-18129f1b84e8?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '4',
    title: 'The Shift Towards Decentralized Wealth Management',
    excerpt: 'Why traditional institutions are adopting modular protocols and the impact of decentralization on individual wealth builders.',
    author: 'David Roa',
    date: 'Feb 10, 2026',
    category: 'Economy',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '5',
    title: 'Automating Your Financial Portfolio Safely',
    excerpt: 'A guide on setting up delegated agents for your wealth management strategy while maintaining full ownership and control.',
    author: 'Elena Vance',
    date: 'Feb 05, 2026',
    category: 'Tutorial',
    image: 'https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: '6',
    title: 'Real-time Analytics in Wealth Management',
    excerpt: 'The power of instant data processing in identifying market opportunities and mitigating risks for long-term financial growth.',
    author: 'Marcus Chen',
    date: 'Jan 28, 2026',
    category: 'Data',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  }
];

export function Blog() {
  const featuredPost = BLOG_POSTS.find(post => post.featured);
  const regularPosts = BLOG_POSTS.filter(post => !post.featured);

  return (
    <div className="container mx-auto px-6 pt-32 pb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
          Aura <span className="text-primary">Journal</span>
        </h1>
        <p className="text-white/60 text-lg max-w-2xl">
          Insights, updates, and deep dives into the future of digital wealth management and secure protocol delegation.
        </p>
      </motion.div>

      {/* Featured Post */}
      {featuredPost && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition-colors">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="h-[300px] lg:h-full overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
                    Featured
                  </span>
                  <span className="text-white/40 text-sm">{featuredPost.category}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-white/60 text-lg mb-8 leading-relaxed">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/40">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-medium">{featuredPost.author}</p>
                      <p className="text-white/40 text-xs">{featuredPost.date}</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-primary font-semibold group/btn">
                    Read Article
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Regular Posts Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularPosts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            className="group flex flex-col h-full rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all"
          >
            <div className="h-48 overflow-hidden rounded-t-2xl">
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-primary text-xs font-semibold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-white/30 text-xs">•</span>
                <span className="text-white/40 text-xs">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h3>
              <p className="text-white/50 text-sm mb-6 line-clamp-3 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-white/60 text-xs font-medium">{post.author}</span>
                <button className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-1 group/btn">
                  Read 
                  <ArrowRight className="w-3 h-3 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
}
