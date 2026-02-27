import { Hero } from '@/components/Hero';
import { Marquee } from '@/components/Marquee';
import { Features } from '@/components/Features';
import { Architecture } from '@/components/Architecture';
import { UseCases } from '@/components/UseCases';

export function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Features />
      <Architecture />
      <UseCases />
    </>
  );
}
