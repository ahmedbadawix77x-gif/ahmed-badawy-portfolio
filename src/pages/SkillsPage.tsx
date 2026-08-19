import React from 'react';
import { Skills } from '../components/Skills';
import { EnglishAndSystems } from '../components/EnglishAndSystems';
import { ContentAndBrand } from '../components/ContentAndBrand';

export const SkillsPage: React.FC = () => {
  return (
    <>
      <Skills />
      <EnglishAndSystems />
      <ContentAndBrand />
    </>
  );
};
