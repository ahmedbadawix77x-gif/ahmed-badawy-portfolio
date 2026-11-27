import React from 'react';
import { Hero } from '../components/Hero';

interface HomePageProps {
  onOpenResume: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenResume }) => {
  return <Hero onOpenResume={onOpenResume} />;
};
