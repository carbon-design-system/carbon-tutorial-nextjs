'use client';

import TutorialHeader from '@/components/TutorialHeader/TutorialHeader';
import { Content } from '@carbon/react';

export function Providers({ children }) {
  return (
    <div>
      <TutorialHeader />
      <Content>{children}</Content>
    </div>
  );
}
