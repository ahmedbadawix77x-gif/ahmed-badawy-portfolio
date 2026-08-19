import React from 'react';
import { Hero } from '../components/Hero';
import { QuickStats } from '../components/QuickStats';

interface HomePageProps {
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenResume }) => {
  return (
    <>
      <Hero onOpenResume={onOpenResume} />
      <QuickStats />
    </>
  );
};
