import React from 'react';
import { Contact } from '../components/Contact';
import { ResumeSection } from '../components/ResumeSection';

interface ContactPageProps {
  onOpenResume: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenResume }) => {
  return (
    <>
      <ResumeSection onOpenResume={onOpenResume} />
      <Contact />
    </>
  );
};
