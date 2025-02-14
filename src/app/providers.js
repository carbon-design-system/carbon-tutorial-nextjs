'use client';

import TutorialHeader from '../components/TutotialHeader/TutorialHeader';
import { Content } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <TutorialHeader />
      <Content>{children}</Content>
    </div>
  );
}