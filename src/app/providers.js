'use client';

import { Content, Theme } from '@carbon/react';
import TutorialHeader from '@/components/Header/Header';

export function Providers({ children }) {
  return (
    <div>
      <Theme theme="g100">
        <TutorialHeader />
      </Theme>
      <Content>{children}</Content>
    </div>
  );
}
